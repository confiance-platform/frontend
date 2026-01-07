import Scrollbar from "simplebar-react";
import {Link} from "react-router-dom";
import MenuItem from "./MenuItem";
import { useAuth } from "../../context/AuthContext";
import { userSidebarConfig } from "../../Data/Sidebar/userSidebar";
import { adminSidebarConfig } from "../../Data/Sidebar/adminSidebar";
import { superAdminSidebarConfig } from "../../Data/Sidebar/superAdminSidebar";

const Sidebar = ({sidebarOpen, setIsSidebarOpen}) => {
    const { isSuperAdmin, isAdmin } = useAuth();

    // Get role-based sidebar configuration
    const getSidebarConfig = () => {
        if (isSuperAdmin()) return superAdminSidebarConfig;
        if (isAdmin()) return adminSidebarConfig;
        return userSidebarConfig;
    };

    const sidebarConfig = getSidebarConfig();

    // Get dashboard link based on role
    const getDashboardLink = () => {
        if (isSuperAdmin()) return "/dashboard/super-admin";
        if (isAdmin()) return "/dashboard/admin";
        return "/dashboard/user";
    };

    return (
        <nav className={`vertical-sidebar ${sidebarOpen ? "semi-nav" : ""}`}>
            <div className="app-logo">
                <Link className="logo d-inline-block" to={getDashboardLink()}>
                    {/* <img src="/assets/images/logo/ra-white.png" alt="#" className="light-logo"/> */}
                    <img src="/assets/images/logo/1.png" alt="#" className="dark-logo"/>
                </Link>
                <span
                    className="bg-light-light toggle-semi-nav"
                    onClick={() => {
                        setIsSidebarOpen(!sidebarOpen)
                    }}
                >
                    <i className="ti ti-chevrons-right f-s-20"></i>
                </span>
            </div>
            <Scrollbar className="app-nav simplebar-scrollable-y" id="app-simple-bar">
                <ul className="main-nav p-0 mt-2">
                    {sidebarConfig.map((config, index) => (
                        <MenuItem key={index} {...config} />
                    ))}
                </ul>
            </Scrollbar>
            <div className="menu-navs">
                <span className="menu-previous"><i className="ti ti-chevron-left"/></span>
                <span className="menu-next"><i className="ti ti-chevron-right"></i></span>
            </div>
        </nav>
    );
};

export default Sidebar;