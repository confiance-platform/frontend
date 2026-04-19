import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import {
    headerLanguages
} from "../../Data/HeaderMenuData.js";
import {Link, useNavigate} from 'react-router-dom'
import {Card, CardBody} from "reactstrap";
import HeaderMode from "../../Layout/Header/HeaderMode.jsx";
import {useAuth} from "../../context/AuthContext";
import {toast} from "react-toastify";
import {notificationService, recommendationService} from "../../Services";
import {resolveImageUrl} from "../../utils/imageUrl";
import {userSidebarConfig} from "../../Data/Sidebar/userSidebar";
import {adminSidebarConfig} from "../../Data/Sidebar/adminSidebar";
import {superAdminSidebarConfig} from "../../Data/Sidebar/superAdminSidebar";

const HeaderMenu = () => {
    const { logout, user, isAdmin, isSuperAdmin } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged out successfully');
            navigate('/auth/sign-in');
        } catch (error) {
            console.error('Logout error:', error);
            toast.error('Failed to logout. Please try again.');
        }
    };

    // -------- Weather (Open-Meteo, no API key) --------
    const [weather, setWeather] = useState(null); // { temp, unit, code, location }

    useEffect(() => {
        let cancelled = false;
        const codeToIcon = (c) => {
            if (c === 0) return 'ph-sun';
            if (c === 1 || c === 2) return 'ph-cloud-sun';
            if (c === 3) return 'ph-cloud';
            if (c >= 45 && c <= 48) return 'ph-cloud-fog';
            if ((c >= 51 && c <= 67) || (c >= 80 && c <= 82)) return 'ph-cloud-rain';
            if ((c >= 71 && c <= 77) || c === 85 || c === 86) return 'ph-snowflake';
            if (c >= 95) return 'ph-cloud-lightning';
            return 'ph-cloud-sun';
        };
        const fetchWeather = async (lat, lon, location = 'Your location') => {
            try {
                const res = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=celsius`
                );
                const data = await res.json();
                if (cancelled) return;
                const c = data?.current;
                if (c && typeof c.temperature_2m === 'number') {
                    setWeather({
                        temp: Math.round(c.temperature_2m),
                        unit: '°C',
                        code: c.weather_code,
                        icon: codeToIcon(c.weather_code),
                        location,
                    });
                }
            } catch (err) {
                console.warn('Weather fetch failed', err?.message);
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude, 'Your location'),
                () => fetchWeather(19.0760, 72.8777, 'Mumbai'), // denied / unavailable → default
                { timeout: 4000, maximumAge: 600000 }
            );
        } else {
            fetchWeather(19.0760, 72.8777, 'Mumbai');
        }
        return () => { cancelled = true; };
    }, []);

    // -------- Notifications (real API) --------
    const [notificationsItems, setNotificationsItems] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    const loadNotifications = useCallback(async () => {
        if (!user?.id) return;
        try {
            const [list, count] = await Promise.all([
                notificationService.getUserNotifications(user.id, { page: 0, size: 10 })
                    .catch(() => null),
                notificationService.getUnreadCount(user.id).catch(() => null),
            ]);
            const content = list?.data?.content || list?.content || [];
            setNotificationsItems(Array.isArray(content) ? content : []);
            const n = count?.data?.count ?? count?.count ?? count?.data ?? count ?? 0;
            setUnreadCount(typeof n === 'number' ? n : 0);
        } catch (err) {
            // silently swallow — notifications are non-critical
        }
    }, [user?.id]);

    useEffect(() => {
        loadNotifications();
        const id = setInterval(loadNotifications, 45000);
        return () => clearInterval(id);
    }, [loadNotifications]);

    const handleRemoveItem1 = async (id) => {
        setNotificationsItems(prev => prev.filter(item => item.id !== id));
        try { await notificationService.deleteNotification(id, user?.id); } catch {}
    };

    const notifDismissRef = useRef(null);

    const handleNotifClick = async (n) => {
        if (!(n.isRead || n.read)) {
            // Optimistic local update, then fire-and-forget the API call.
            setNotificationsItems(prev => prev.map(x =>
                x.id === n.id ? { ...x, isRead: true, read: true } : x));
            setUnreadCount(c => Math.max(0, c - 1));
            try { await notificationService.markAsRead(n.id, user?.id); } catch {}
        }
        if (n.actionUrl) {
            notifDismissRef.current?.click();
            navigate(n.actionUrl);
        }
    };

    const markAllRead = async () => {
        if (!user?.id) return;
        try {
            await notificationService.markAllAsRead(user.id);
            setUnreadCount(0);
            setNotificationsItems(prev => prev.map(n => ({ ...n, read: true })));
        } catch (err) {
            toast.error(err?.message || 'Failed to mark all read');
        }
    };

    const formatNotifDate = (iso) => {
        if (!iso) return '';
        try {
            const d = new Date(iso);
            const diff = (Date.now() - d.getTime()) / 1000;
            if (diff < 60) return 'just now';
            if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
            if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
            return d.toLocaleDateString();
        } catch { return ''; }
    };

    const [currentIcon1, setCurrentIcon1] = useState('usa');
    const [selectedLang, setSelectedLang] = useState('lang-en');

    const handleLangChange = (lang, icon) => {
        setSelectedLang(lang);
        setCurrentIcon1(icon);
    };

    // -------- Global search (role-aware pages + stock symbols) --------
    const [searchTerm, setSearchTerm] = useState("");
    const [searchSymbols, setSearchSymbols] = useState([]);
    const searchDismissRef = useRef(null);

    // Build a flat list of navigable pages from the sidebar config that
    // matches the current user's role. Each entry can be filtered by title
    // + keyword, and clicking jumps to the path.
    const pageIndex = useMemo(() => {
        const cfg = isSuperAdmin?.() ? superAdminSidebarConfig
                  : isAdmin?.()      ? adminSidebarConfig
                  : userSidebarConfig;
        const out = [];
        const walk = (items, parentName) => {
            for (const it of items || []) {
                if (it.type === 'single' && it.path) {
                    out.push({
                        id: it.path,
                        title: it.name,
                        path: it.path,
                        kind: 'Page',
                        iconClass: it.iconClass || 'ph-file-text',
                        bgColor: 'bg-light-primary',
                        keywords: [parentName, it.name].filter(Boolean).join(' ').toLowerCase()
                    });
                } else if (it.type === 'dropdown' && Array.isArray(it.children)) {
                    for (const c of it.children) {
                        if (!c.path) continue;
                        out.push({
                            id: c.path,
                            title: c.name,
                            subtitle: it.name,
                            path: c.path,
                            kind: 'Page',
                            iconClass: it.iconClass || 'ph-file-text',
                            bgColor: 'bg-light-primary',
                            keywords: `${it.name} ${c.name}`.toLowerCase()
                        });
                    }
                }
            }
        };
        walk(cfg);
        // A couple of top-level shortcuts always useful.
        out.push({
            id: '/apps/profile-page/profile', title: 'Profile Details',
            path: '/apps/profile-page/profile', kind: 'Page',
            iconClass: 'ph-user-circle', bgColor: 'bg-light-info',
            keywords: 'profile avatar account'
        });
        out.push({
            id: '/apps/profile-page/setting', title: 'Settings',
            path: '/apps/profile-page/setting', kind: 'Page',
            iconClass: 'ph-gear', bgColor: 'bg-light-secondary',
            keywords: 'settings password notifications'
        });
        return out;
    }, [isAdmin, isSuperAdmin]);

    // Load the recommendation symbols once so the search can jump to a
    // symbol's context (Trades / Record Buy for now — we route to
    // `/financial/trades?symbol=XYZ`).
    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const list = await recommendationService.getSymbols();
                if (!cancelled && Array.isArray(list)) setSearchSymbols(list);
            } catch { /* non-critical */ }
        })();
        return () => { cancelled = true; };
    }, []);

    const filterItems = useMemo(() => {
        const q = searchTerm.trim().toLowerCase();
        if (!q) {
            // No query — show the first handful of pages so the panel isn't empty.
            return pageIndex.slice(0, 10);
        }
        const pages = pageIndex
            .filter(p =>
                p.title.toLowerCase().includes(q) ||
                (p.keywords && p.keywords.includes(q)))
            .slice(0, 12);
        const symHits = searchSymbols
            .filter(s => s.toLowerCase().includes(q))
            .slice(0, 10)
            .map(s => ({
                id: `symbol:${s}`,
                title: s,
                subtitle: 'Stock symbol',
                path: `/financial/trades?symbol=${encodeURIComponent(s)}`,
                kind: 'Symbol',
                iconClass: 'ph-chart-line-up',
                bgColor: 'bg-light-success',
                keywords: s.toLowerCase()
            }));
        return [...pages, ...symHits];
    }, [searchTerm, pageIndex, searchSymbols]);

    const handleSearchPick = (item) => {
        if (!item?.path) return;
        setSearchTerm("");
        // Close the Bootstrap offcanvas programmatically by clicking its hidden dismiss button.
        searchDismissRef.current?.click();
        navigate(item.path);
    };

    const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const safe = String(highlight).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${safe})`, "gi");
        return String(text).replace(regex, `<span class="highlight-searchtext">$1</span>`);
    };


    return (
        <>
            <ul className="d-flex align-items-center">
                <li className="header-cloud">
                    <a href="#" className="head-icon" role="button"
                       title={weather?.location || 'Weather'}>
                        <i className={`ph-duotone ${weather?.icon || 'ph-cloud-sun'} text-primary f-s-26 me-1`}></i>
                        <span>
                            {weather ? weather.temp : '—'}
                            {' '}<sup className="f-s-10">{weather?.unit || '°C'}</sup>
                        </span>
                    </a>
                </li>

                <li className="header-language">
                    <div id="lang_selector" className="flex-shrink-0 dropdown">
                        <a
                            href="#"
                            className="d-block head-icon ps-0"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <div className={`lang-flag ${selectedLang}`}>
                               <span className="flag rounded-circle overflow-hidden">
                                 <i className={`flag-icon flag-icon-${currentIcon1} flag-icon-squared b-r-10 f-s-22`}/>
                               </span>
                            </div>
                        </a>
                        <ul className="dropdown-menu language-dropdown header-card border-0">
                            {headerLanguages.map(({lang, title, label, icon}) => (
                                <li
                                    key={lang}
                                    className={`lang ${lang} dropdown-item p-2 ${selectedLang === lang ? 'selected' : ''}`}
                                    title={title}
                                    onClick={() => handleLangChange(lang, icon)}
                                >
                                    <span className="d-flex align-items-center">
                                      <i className={`flag-icon flag-icon-${icon} flag-icon-squared b-r-10 f-s-22`}></i>
                                      <span className="ps-2">{label}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>

                <li className="header-searchbar">
                    <a href="#" className="d-block head-icon" role="button" data-bs-toggle="offcanvas"
                       data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="ph ph-magnifying-glass"></i>
                    </a>

                    <div className="offcanvas offcanvas-end header-searchbar-canvas" tabIndex="-1"
                         id="offcanvasRight" aria-labelledby="offcanvasRight">
                        {/* Hidden dismiss target — clicking it closes the offcanvas without
                            needing to wrap every list item with data-bs-dismiss. */}
                        <button
                            ref={searchDismissRef}
                            type="button"
                            data-bs-dismiss="offcanvas"
                            style={{ display: 'none' }}
                            aria-hidden="true"
                        />
                        <div className="header-searchbar-header">
                            <div className="d-flex justify-content-between mb-3">
                                <form className="app-form app-icon-form w-100" action="#"
                                      onSubmit={(e) => {
                                          e.preventDefault();
                                          if (filterItems.length > 0) handleSearchPick(filterItems[0]);
                                      }}>
                                    <div className="position-relative">
                                        <input
                                            type="search"
                                            className="form-control search-filter"
                                            placeholder="Search pages and symbols…"
                                            aria-label="Search"
                                            autoFocus
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <i className="ti ti-search text-dark"></i>
                                    </div>
                                </form>

                                <div className="app-dropdown flex-shrink-0">
                                    <a className="h-35 w-35 d-flex-center b-r-15 overflow-hidden bg-light-secondary search-list-avtar ms-2"
                                       href="#" role="button" data-bs-toggle="dropdown"
                                       data-bs-auto-close="outside" aria-expanded="false">
                                        <i className="ph-duotone  ph-gear f-s-20"></i>
                                    </a>

                                    <ul className="dropdown-menu mb-3">
                                        <li className="dropdown-item mt-2">
                                            <a href="#">
                                                <h6 className="mb-0">Search Settings</h6>
                                            </a>
                                        </li>
                                        <li
                                            className="dropdown-item d-flex align-items-center justify-content-between">
                                            <a href="#">
                                                <h6 className="mb-0 text-secondary f-s-14">Safe Search
                                                    Filtering</h6>
                                            </a>
                                            <div className="flex-shrink-0">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input form-check-primary"
                                                        type="checkbox" id="searchSwitch" defaultChecked/>
                                                </div>
                                            </div>
                                        </li>
                                        <li
                                            className="dropdown-item d-flex align-items-center justify-content-between">
                                            <a href="#">
                                                <h6 className="mb-0 text-secondary f-s-14">Search
                                                    Suggestions</h6>
                                            </a>
                                            <div className="flex-shrink-0">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input form-check-primary"
                                                        type="checkbox" id="searchSwitch1"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li
                                            className="dropdown-item d-flex align-items-center justify-content-between">
                                            <h6 className="mb-0 text-secondary f-s-14"> Search History
                                            </h6>
                                            <i className="ti ti-message-circle me-3  text-success"></i>
                                        </li>
                                        <li className="dropdown-divider"></li>
                                        <li
                                            className="dropdown-item d-flex align-items-center justify-content-between mb-2">
                                            <a href="#">
                                                <h6 className="mb-0 text-dark f-s-14">Custom Search
                                                    Preferences</h6>
                                            </a>
                                            <div className="flex-shrink-0">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input form-check-primary"
                                                        type="checkbox" id="searchSwitch2"/>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mb-0 text-secondary f-s-15 mt-2">
                                {searchTerm
                                    ? `${filterItems.length} result${filterItems.length === 1 ? '' : 's'}`
                                    : 'Jump to a page or search a stock symbol'}
                            </p>
                        </div>
                        <div className="offcanvas-body app-scroll p-0">
                            {filterItems.length === 0 ? (
                                <div className="text-center text-muted py-5 px-3">
                                    <i className="ph-duotone ph-magnifying-glass" style={{ fontSize: 40 }}></i>
                                    <div className="mt-2">No matches for “{searchTerm}”.</div>
                                </div>
                            ) : (
                                <ul className="search-list">
                                    {filterItems.map((item) => (
                                        <li className="search-list-item" key={item.id}
                                            onClick={() => handleSearchPick(item)}
                                            role="button"
                                            style={{ cursor: 'pointer' }}>
                                            <div className={`h-35 w-35 d-flex-center b-r-15 overflow-hidden ${item.bgColor} search-list-avtar`}>
                                                <i className={`ph-duotone ${item.iconClass} f-s-20`}></i>
                                            </div>
                                            <div className="search-list-content">
                                                <h6
                                                    className="mb-0 text-dark"
                                                    dangerouslySetInnerHTML={{
                                                        __html: highlightText(item.title, searchTerm),
                                                    }}
                                                ></h6>
                                                <p className="f-s-13 mb-0 text-secondary">
                                                    {item.subtitle || item.kind}
                                                    {item.kind === 'Page' && item.path
                                                        ? ` · ${item.path}` : ''}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </li>

                <li className="header-dark">
                    <HeaderMode/>
                </li>

                <li className="header-notification">
                    <a href="#" className="d-block head-icon position-relative" role="button"
                       data-bs-toggle="offcanvas" data-bs-target="#notificationcanvasRight"
                       aria-controls="notificationcanvasRight">
                        <i className="ph ph-bell"></i>
                        {unreadCount > 0 && (
                            <span className="position-absolute translate-middle badge rounded-pill bg-danger badge-notification">
                                {unreadCount > 99 ? '99+' : unreadCount}
                            </span>
                        )}
                    </a>
                    <div className="offcanvas offcanvas-end header-notification-canvas" tabIndex="-1"
                         id="notificationcanvasRight" aria-labelledby="notificationcanvasRightLabel">
                        <button ref={notifDismissRef} type="button"
                                data-bs-dismiss="offcanvas" style={{ display: 'none' }} aria-hidden="true"/>
                        <div className="offcanvas-header d-flex align-items-center justify-content-between">
                            <h5 className="offcanvas-title mb-0" id="notificationcanvasRightLabel">
                                Notifications{unreadCount > 0 && <span className="badge bg-primary ms-2">{unreadCount}</span>}
                            </h5>
                            <div className="d-flex align-items-center gap-2">
                                {notificationsItems.length > 0 && unreadCount > 0 && (
                                    <button type="button" className="btn btn-sm btn-link p-0 text-primary"
                                            onClick={markAllRead}>
                                        Mark all read
                                    </button>
                                )}
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="offcanvas-body app-scroll p-0">
                            <div className="head-container">
                                {notificationsItems.length > 0 ? (
                                    notificationsItems.map((n) => (
                                        <div key={n.id}
                                             className={`notification-message head-box ${n.read || n.isRead ? '' : 'bg-light-primary'}`}
                                             onClick={() => handleNotifClick(n)}
                                             role="button"
                                             style={{ cursor: 'pointer' }}>
                                            <div className="message-images">
                                                <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
                                                    <i className="ph-duotone ph-bell text-white"></i>
                                                </span>
                                            </div>
                                            <div className="message-content-box flex-grow-1 ps-2">
                                                <div className="f-s-15 text-secondary mb-0">
                                                    <span className="f-w-500 text-secondary d-block">{n.title || 'Notification'}</span>
                                                    <span className="text-muted">{n.message || n.body || ''}</span>
                                                </div>
                                                <span className="badge text-light-secondary mt-2">
                                                    {formatNotifDate(n.createdAt || n.created_at || n.date)}
                                                </span>
                                            </div>
                                            <div className="align-self-start text-end">
                                                <i className="ph ph-trash f-s-18 text-danger close-btn"
                                                   onClick={(e) => { e.stopPropagation(); handleRemoveItem1(n.id); }}
                                                   style={{ cursor: 'pointer' }}></i>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="hidden-massage py-4 px-3 text-center">
                                        <i className="ph-duotone ph-bell-slash text-primary" style={{ fontSize: 48 }}></i>
                                        <div className="mt-3">
                                            <h6 className="mb-0">No notifications</h6>
                                            <p className="text-secondary">You're all caught up.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="p-3 border-top text-center">
                                <Link to="/notifications"
                                      className="btn btn-sm btn-link"
                                      onClick={() => notifDismissRef.current?.click()}>
                                    View all notifications
                                </Link>
                            </div>
                        </div>
                    </div>

                </li>

                <li className="header-profile">
                    <a href="#" className="d-block head-icon" role="button" data-bs-toggle="offcanvas"
                       data-bs-target="#profilecanvasRight" aria-controls="profilecanvasRight">
                        {user?.profileImageUrl ? (
                            <img src={resolveImageUrl(user.profileImageUrl)} alt="avatar"
                                 className="b-r-10 h-35 w-35"
                                 style={{ objectFit: 'cover' }}
                                 onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'inline-flex'; }}/>
                        ) : null}
                        <span className="b-r-10 h-35 w-35 d-flex-center bg-primary-subtle text-primary"
                              style={{ display: user?.profileImageUrl ? 'none' : 'inline-flex' }}>
                            <i className="ph-duotone ph-user-circle f-s-22"></i>
                        </span>
                    </a>

                    <div className="offcanvas offcanvas-end header-profile-canvas" tabIndex="-1"
                         id="profilecanvasRight" aria-labelledby="profilecanvasRight">
                        <div className="offcanvas-body app-scroll" style={{ maxHeight: 'calc(100vh - 20px)', overflowY: 'auto' }}>
                            <ul className="">
                                <li>
                                    <div className="d-flex-center">
                            <span className="h-45 w-45 d-flex-center b-r-10 position-relative bg-primary-subtle text-primary">
                                {user?.profileImageUrl ? (
                                    <img src={resolveImageUrl(user.profileImageUrl)} alt="avatar"
                                         className="img-fluid b-r-10 h-45 w-45"
                                         style={{ objectFit: 'cover' }}/>
                                ) : (
                                    <i className="ph-duotone ph-user-circle f-s-28"></i>
                                )}
                            </span>
                                    </div>
                                    <div className="text-center mt-2">
                                        <h6 className="mb-0">{user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : user?.email || 'User'}</h6>
                                        <p className="f-s-12 mb-0 text-secondary">{user?.email || 'user@example.com'}
                                        </p>
                                    </div>
                                </li>

                                <li className="app-divider-v dotted my-1"></li>
                                <li>
                                    <Link className="f-w-500" to="/apps/profile-page/profile">
                                        <i className="ph-duotone  ph-user-circle pe-1 f-s-20"></i>
                                        Profile Details
                                    </Link>
                                </li>
                                <li>
                                    <Link className="f-w-500" to="/apps/profile-page/setting">
                                        <i className="ph-duotone  ph-gear pe-1 f-s-20"></i> Settings
                                    </Link>
                                </li>
                                <li>
                                    <div className="app-dropdown dropstart">
                                        <Link className="f-w-500" role="button" href="/apps/profile-page/setting"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ph-duotone  ph-eye-slash pe-1 f-s-20"></i>
                                            Hide Settings
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item">Hide Comments</a></li>
                                            <li><a className="dropdown-item">Advanced comment
                                                filtering</a></li>
                                            <li><a className="dropdown-item">Hide mssage request</a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item">Separated link</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a className="f-w-500" href="#">
                                            <i className="ph-duotone  ph-notification pe-1 f-s-20"></i>
                                            Notification
                                        </a>
                                        <div className="flex-shrink-0">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input form-check-primary"
                                                       type="checkbox" id="basicSwitch" defaultChecked/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <a className="f-w-500" href="#">
                                                <i className="ph-duotone  ph-detective pe-1 f-s-20"></i>
                                                Incognito
                                            </a>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input form-check-primary"
                                                       type="checkbox" id="incognitoSwitch"/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="app-divider-v dotted my-1"></li>
                                <li>
                                    <Link className="f-w-500" href="/apps/faq">
                                        <i className="ph-duotone  ph-question pe-1 f-s-20"></i> Help
                                    </Link>
                                </li>
                                <li>
                                    <Link className="f-w-500" href="/apps/pricing">
                                        <i
                                            className="ph-duotone  ph-currency-circle-dollar pe-1 f-s-20"></i>
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link className="mb-0 text-secondary f-w-500" href="/admin-pages/auth_pages/sign_up">
                                        <i className="ph-bold  ph-plus pe-1 f-s-20"></i> Add account
                                    </Link>
                                </li>
                                <li className="app-divider-v dotted my-1"></li>
                                <li>
                                    {/* <Card className="card-light-primary upgrade-plan">
                                        <CardBody>
                                            <div className="text-center">
                                                <div>
                                                    <h6 className="mb-0 text-dark f-w-600">Free Plan
                                                    </h6>
                                                    <p className="text-dark mb-0">20k views</p>
                                                </div>
                                                <div className="flex-shrink-0 mt-3">
                                                    <button type="button"
                                                            className="btn btn-dark text-white">Upgrade
                                                    </button>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card> */}
                                </li>
                                <li className="app-divider-v dotted my-1"></li>

                                <li>
                                    <a className="mb-0 text-danger" href="#" onClick={(e) => {
                                        e.preventDefault();
                                        handleLogout();
                                    }} style={{ cursor: 'pointer' }}>
                                        <i className="ph-duotone  ph-sign-out pe-1 f-s-20"></i> Log Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default HeaderMenu;