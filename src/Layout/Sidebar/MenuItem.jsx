import {Fragment, useMemo} from "react";
import {Link, useLocation} from "react-router-dom";

const MenuItem = (props) => {
    const {title, iconClass, type, path, badgeCount, children: links, name, collapseId} = props;
    const {pathname} = useLocation();

    const isActive = useMemo(() => {
        return (linkPath) => linkPath === pathname
    }, [pathname]);

    const checkUnder = (links) => {
        return (links || []).some(link =>
            isActive(link.path) || (link.children && link.children.some(link => isActive(link.path)))
        );
    };

    return (
        <Fragment>
            {type === "dropdown" ? (
                <Fragment>
                    {title && (
                        <li className="menu-title">
                            <span>{title}</span>
                        </li>
                    )}
                    <li>
                        <Link
                            data-bs-toggle="collapse"
                            to={collapseId ? `#${collapseId}` : ""}
                            aria-expanded={(links || []).some(link => isActive(link.path))}
                        >
                            <i className={iconClass}></i>
                            {name}
                            {badgeCount && (
                                <span
                                    className={`badge ${
                                        collapseId === "advance-ui"
                                            ? "rounded-pill bg-warning"
                                            : badgeCount === "new"
                                                ? "text-light-success"
                                                : "text-bg-success"
                                        } badge-notification ms-2
                                    `}
                                >
                                  {badgeCount}
                                </span>
                            )}
                        </Link>
                        {links && (
                            <ul
                                className={`collapse ${((links || []).some(link => isActive(link.path)) || checkUnder(links)) ? "show" : ""}`}
                                id={collapseId}
                            >
                                {(links || []).map((link, index) => {
                                    return (
                                        <Fragment key={index}>
                                            {link.children ? (
                                                <li key={index} className="another-level">
                                                    <Link
                                                        data-bs-toggle="collapse"
                                                        to={`#${link.collapseId}`}
                                                        aria-expanded="false"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                    <ul className={`collapse  ${link.children.some(link => isActive(link.path)) ? "show" : ""}`}
                                                        id={link.collapseId}>
                                                        {link.children.map((underLink, index) => (
                                                            <li key={index}
                                                                className={isActive(underLink.path) ? "active" : ""}>
                                                                <Link className="" to={underLink.path}>
                                                                    {underLink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ) : (
                                                <Fragment>
                                                    <li key={index} className={isActive(link.path) ? 'active' : ''}>
                                                        <Link to={link.path}>{link.name}</Link>
                                                    </li>
                                                </Fragment>
                                            )}
                                        </Fragment>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                </Fragment>
            ) : (
                <li className="no-sub">
                    <Link to={path}>
                        <i className={iconClass}></i>
                        {name}
                    </Link>
                </li>
            )}
        </Fragment>
    );
};

export default MenuItem;