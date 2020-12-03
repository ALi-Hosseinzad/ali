import React from "react";
import './menu.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import ApartmentIcon from '@material-ui/icons/Apartment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { withRouter, NavLink } from "react-router-dom";

const Menu = props => {
    return (
        <div className="">
            <ul className="">
                <li className="">
                    <DashboardIcon/>
                    <NavLink
                        to="/dashbord"
                        className="nav-link"
                        activeClassName="active"
                        activeStyle={{ color: "purple" }}
                    >
                       داشبورد
                    </NavLink>
                </li>
                <li className="nav-item">
                    <StoreIcon/>
                    <NavLink
                        to="/markets"
                        className="nav-link"
                        activeStyle={{ color: "purple" }}
                    >
                       بازارها
                    </NavLink>
                </li>
                <li className="nav-item">
                    <ApartmentIcon/>
                    <NavLink
                        to="/pardis"
                        className="nav-link"
                        activeStyle={{ color: "purple" }}
                    >
                       پردیس
                    </NavLink>
                </li>
                <li className="nav-item">
                    <MonetizationOnIcon/>
                    <NavLink
                        to="/wallet"
                        className="nav-link"
                        activeStyle={{ color: "purple" }}
                    >
                       کیف پول
                    </NavLink>
                </li>
                <li className="nav-item">
                    <PersonOutlineIcon/>
                    <NavLink
                        to="/userAccount"
                        className="nav-link"
                        activeStyle={{ color: "purple" }}
                    >
                       حساب کاربری
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Menu);