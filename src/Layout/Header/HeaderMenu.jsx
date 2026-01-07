import React, {useState} from 'react';
import {
    weatherData,
    initialCartItems,
    initialnotifications,
    linkData,
    headerLanguages,
    searchData
} from "../../Data/HeaderMenuData.js";
import {Link} from 'react-router-dom'
import {Card, CardBody} from "reactstrap";
import HeaderMode from "../../Layout/Header/HeaderMode.jsx";

const HeaderMenu = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const [notificationsItems, setNotificationsItems] = useState(initialnotifications);

    const handleRemoveItem1 = (id) => {
        const updatedNotificationsItems = notificationsItems.filter(item => item.id !== id);
        setNotificationsItems(updatedNotificationsItems);
    };

    const [currentIcon1, setCurrentIcon1] = useState('usa');
    const [selectedLang, setSelectedLang] = useState('lang-en');

    const handleLangChange = (lang, icon) => {
        setSelectedLang(lang);
        setCurrentIcon1(icon);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const filterItems = searchData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const regex = new RegExp(`(${highlight})`, "gi");
        return text.replace(regex, `<span class="highlight-searchtext">$1</span>`);
    };


    return (
        <>
            <ul className="d-flex align-items-center">
                <li className="header-cloud">
                    <a href="#" className="head-icon" role="button" data-bs-toggle="offcanvas"
                       data-bs-target="#cloudoffcanvasTops" aria-controls="cloudoffcanvasTops">
                        <i className="ph-duotone  ph-cloud-sun text-primary f-s-26 me-1"></i>
                        <span>26 <sup className="f-s-10">°C</sup></span>
                    </a>
                    <div className="offcanvas offcanvas-end header-cloud-canvas" tabIndex="-1"
                         id="cloudoffcanvasTops" aria-labelledby="cloudoffcanvasTops">
                        <div className="offcanvas-body p-0">
                            <div className="cloud-body">
                                <div className="cloud-content-box">
                                    {weatherData.map((data, index) => (
                                        <div className={`cloud-box ${data.bgClass}`} key={index}>
                                            <p className="mb-3">{data.day}</p>
                                            <h6 className="mt-4 f-s-13">{data.temperature}</h6>
                                            <span>
                                              <i className={`ph-duotone ${data.icon} text-white f-s-25`}></i>
                                            </span>
                                            <p className="f-s-13 mt-3">
                                                <i className="wi wi-raindrop"></i> {data.rain}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <div className="header-searchbar-header">
                            <div className="d-flex justify-content-between mb-3">
                                <form className="app-form app-icon-form w-100" action="#">
                                    <div className="position-relative">
                                        <input
                                            type="search"
                                            className="form-control search-filter"
                                            placeholder="Search..."
                                            aria-label="Search"
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
                            <p className="mb-0 text-secondary f-s-15 mt-2">Recently Searched Data:</p>
                        </div>
                        <div className="offcanvas-body app-scroll p-0">
                            <ul className="search-list">
                                {filterItems.map((item, index) => (
                                    <li className="search-list-item" key={index}>
                                        <div
                                            className={`h-35 w-35 d-flex-center b-r-15 overflow-hidden ${item.bgColor} search-list-avtar`}>
                                            <i className={`ph-duotone ${item.icon} f-s-20`}></i>
                                        </div>
                                        <div className="search-list-content">
                                            <h6
                                                className="mb-0 text-dark"
                                                dangerouslySetInnerHTML={{
                                                    __html: highlightText(item.title, searchTerm),
                                                }}
                                            ></h6>
                                            <p className="f-s-13 mb-0 text-secondary">{item.id}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>

                <li className="header-apps">
                    <a href="#" className="d-block head-icon" role="button" data-bs-toggle="offcanvas"
                       data-bs-target="#appscanvasRights" aria-controls="appscanvasRights">
                        <i className="ph ph-bounding-box"></i>

                    </a>

                    <div className="offcanvas offcanvas-end header-apps-canvas" tabIndex="-1"
                         id="appscanvasRights" aria-labelledby="appscanvasRightsLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="appscanvasRightsLabel">Shortcut</h5>
                            <div className="app-dropdown flex-shrink-0">
                                <a className=" p-1" href="#" role="button" data-bs-toggle="dropdown"
                                   data-bs-auto-close="outside" aria-expanded="false">
                                    <i className="ph-bold  ph-faders-horizontal f-s-20"></i>
                                </a>
                                <ul className="dropdown-menu mb-3 p-2">
                                    <li className="dropdown-item">
                                        <a href="#">
                                            Privacy Settings
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#">
                                            Account Settings
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#">
                                            Accessibility
                                        </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li className="dropdown-item border-0">
                                        <a href="#" role="button" data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            More Settings
                                        </a>
                                        <ul className="dropdown-menu sub-menu">
                                            <li className="dropdown-item">
                                                <a href="#">
                                                    Backup and Restore
                                                </a>
                                            </li>
                                            <li className="dropdown-item">
                                                <a href="#">
                                                    <span>Data Usage</span>
                                                </a>
                                            </li>
                                            <li className="dropdown-item">
                                                <a href="#">
                                                    <span>Theme</span>
                                                </a>
                                            </li>
                                            <li
                                                className="dropdown-item d-flex align-items-center justify-content-between">
                                                <a href="#">
                                                    <p className="mb-0">Notification</p>
                                                </a>
                                                <div className="flex-shrink-0">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input  form-check-primary"
                                                            type="checkbox" id="notificationSwitch"/>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="offcanvas-body app-scroll">
                            <div className="row row-cols-3">
                                {linkData.map((link, index) => (
                                    <div key={index} className="d-flex-center text-center mb-3">
                                        <Link href={link.href}>
                                            <span>
                                                <i className={`ph-duotone ${link.icon} ${link.color} f-s-30`}></i>
                                            </span>
                                            <p className="mb-0 f-w-500 text-secondary">{link.text}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>

                <li className="header-cart">
                    <a href="#" className="d-block head-icon position-relative" role="button"
                       data-bs-toggle="offcanvas" data-bs-target="#cartcanvasRight"
                       aria-controls="cartcanvasRight">
                        <i className="ph ph-shopping-cart-simple"></i>
                        <span
                            className="position-absolute translate-middle badge rounded-pill bg-danger badge-notification">4</span>
                    </a>
                    <div className="offcanvas offcanvas-end header-cart-canvas" tabIndex="-1"
                         id="cartcanvasRight" aria-labelledby="cartcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="cartcanvasRightLabel">Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body app-scroll p-0">
                            <div className="head-container">
                                {cartItems.length > 0 ? (
                                    cartItems.map((item) => (
                                        <div className="head-box" key={item.id}>
                                            <img
                                                src={item.imageSrc}
                                                alt={item.name}
                                                className="h-50 me-3 b-r-10"
                                                width={50}
                                                height={50}
                                            />
                                            <div className="flex-grow-1">
                                                <Link className="mb-0 f-w-600 f-s-16" href="/apps/e-shop/product-details">
                                                    {item.name}
                                                </Link>
                                                <div>
                                                    {Array.from({length: 5}, (_, i) => (
                                                        <i
                                                            key={i}
                                                            className={`ti ti-star-filled f-s-12 ${i < item.stars ? 'text-warning' : ''}`}
                                                        ></i>
                                                    ))}
                                                </div>
                                                <span className="text-secondary">
                                                  <span className="text-dark f-w-400">size</span>: {item.size}
                                                </span>
                                                <span className="text-secondary ms-2">
                                                    <span className="text-dark f-w-400">Color</span>: {item.color}
                                                </span>
                                            </div>
                                            <div className="text-end">
                                                <i
                                                    className="ph ph-trash f-s-18 text-danger close-btn"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                ></i>
                                                <p className="text-muted f-w-500 mb-0">{item.price}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="hidden-massage py-4 px-3">
                                        <img
                                            src="/assets/images/icons/cart.png"
                                            alt="cart"
                                            className="w-50 h-50 mb-3"
                                            width={50}
                                            height={50}
                                        />
                                        <div>
                                            <h6 className="mb-0">Your Cart is Empty</h6>
                                            <p className="text-secondary mb-0">Add some items :)</p>
                                            <Link className="btn btn-light-primary btn-xs mt-2"
                                                  href="/apps/e-shop/product-details">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="offcanvas-footer">
                            <div className="head-box-footer p-3">
                                <div className="mb-4">
                                    <h6 className="text-muted f-w-600">Total <span
                                        className="float-end">$3,468.00
                            </span></h6>
                                </div>
                                <div className="header-cart-btn">
                                    <Link href="/apps/e-shop/cart" role="button"
                                          className="btn btn-light-primary">
                                        <i className="ti ti-eye"></i> View Cart</Link>
                                    <Link href="/apps/e-shop/checkout" role="button"
                                          className="btn btn-light-success">
                                        Checkout <i className="ti ti-shopping-cart"></i></Link>
                                </div>
                            </div>
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
                        <span
                            className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower"></span>
                    </a>
                    <div className="offcanvas offcanvas-end header-notification-canvas" tabIndex="-1"
                         id="notificationcanvasRight" aria-labelledby="notificationcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="notificationcanvasRightLabel">
                                Notification</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body app-scroll p-0">
                            <div className="head-container">
                                {notificationsItems.length > 0 ? (
                                    notificationsItems.map((notification) => (
                                        <div key={notification.id} className="notification-message head-box">
                                            <div className="message-images">
                                                <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
                                                  <img
                                                      src={notification.imageSrc}
                                                      alt={notification.title}
                                                      className="img-fluid b-r-10"
                                                  />
                                                  <span
                                                      className="position-absolute bottom-30 end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar"></span>
                                                </span>
                                            </div>
                                            <div className="message-content-box flex-grow-1 ps-2">
                                                <Link href="/apps/email-page/read-email" className="f-s-15 text-secondary mb-0">
                                                    <span className="f-w-500 text-secondary">{notification.title}</span>
                                                    {notification.message}
                                                </Link>
                                                <span
                                                    className="badge text-light-secondary mt-2">{notification.date}</span>
                                            </div>
                                            <div className="align-self-start text-end">
                                                <i className="ph ph-trash f-s-18 text-danger close-btn" onClick={() => handleRemoveItem1(notification.id)}></i>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="hidden-massage py-4 px-3">
                                        <img src="/assets/images/icons/bell.png" className="w-50 h-50 mb-3 mt-2"
                                             alt="No notifications"/>
                                        <div>
                                            <h6 className="mb-0">Notification Not Found</h6>
                                            <p className="text-secondary">
                                                When you have any notifications added here, they will appear here.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </li>

                <li className="header-profile">
                    <a href="#" className="d-block head-icon" role="button" data-bs-toggle="offcanvas"
                       data-bs-target="#profilecanvasRight" aria-controls="profilecanvasRight">
                        <img src="/assets/images/avtar/woman.jpg" alt="avtar"
                             className="b-r-10 h-35 w-35"/>
                    </a>

                    <div className="offcanvas offcanvas-end header-profile-canvas" tabIndex="-1"
                         id="profilecanvasRight" aria-labelledby="profilecanvasRight">
                        <div className="offcanvas-body app-scroll">
                            <ul className="">
                                <li>
                                    <div className="d-flex-center">
                            <span
                                className="h-45 w-45 d-flex-center b-r-10 position-relative">
                              <img src="/assets/images/avtar/woman.jpg" alt="woman"
                                   className="img-fluid b-r-10"/>
                            </span>
                                    </div>
                                    <div className="text-center mt-2">
                                        <h6 className="mb-0"> Laura Monaldo</h6>
                                        <p className="f-s-12 mb-0 text-secondary">lauradesign@gmail.com
                                        </p>
                                    </div>
                                </li>

                                <li className="app-divider-v dotted my-1"></li>
                                <li>
                                    <Link className="f-w-500" href="/apps/profile-page/profile">
                                        <i className="ph-duotone  ph-user-circle pe-1 f-s-20"></i>
                                        Profile Detaiils
                                    </Link>
                                </li>
                                <li>
                                    <Link className="f-w-500" href="/apps/profile-page/setting">
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
                                    <Card className="card-light-primary upgrade-plan">
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
                                    </Card>
                                </li>
                                <li className="app-divider-v dotted my-1"></li>

                                <li>
                                    <Link className="mb-0 text-danger" href="/admin-pages/auth_pages/sign_in">
                                        <i className="ph-duotone  ph-sign-out pe-1 f-s-20"></i> Log Out
                                    </Link>
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