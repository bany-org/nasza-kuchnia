import React from "react";
import { NavLink } from "react-router-dom";

import "./NavbarButton.css";

const STYLES = {
    GRAY: "navbar-button__gray",
    BLUE: "navbar-button__blue",
    DEFAULT: "navbar-button",
};

const NavbarButton = (props) => {
    return (
        <NavLink
            exact={props.exact || false}
            to={props.path || ""}
            className="navlink"
        >
            <button
                className={props.style || STYLES.DEFAULT}
                type="button"
                disabled={props.disabled}
            >
                {props.icon && (
                    <div className="navbar-button__icon">{props.icon}</div>
                )}

                {props.label && (
                    <div className="navbar-button__label">{props.label}</div>
                )}
            </button>
        </NavLink>
    );
};

NavbarButton.styles = STYLES;

export default NavbarButton;
