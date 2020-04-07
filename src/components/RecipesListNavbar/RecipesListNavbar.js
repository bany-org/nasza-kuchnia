import React, { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import NavbarButton from "../NavbarButton/NavbarButton";
import AddIcon from "../../assets/AddIcon/AddIcon";
import FilterIcon from "../../assets/FilterIcon/FilterIcon";
import SearchIcon from "../../assets/SearchIcon/SearchIcon";
import PersonIcon from "../../assets/PersonIcon/PersonIcon";

import "./RecipesListNavbar.css";

const RecipesListNavbar = () => {
    const UserCTX = useContext(UserContext);
    const { loggedIn } = UserCTX;

    const path = loggedIn ? "/new/recipe" : "/login/info";
    const userPagePath = loggedIn ? "/user" : "/login";

    return (
        <div className="recipes-list-navbar">
            <span className="recipes-list-navbar__title">Nasza kuchnia</span>
            <NavbarButton
                style={NavbarButton.styles.GRAY}
                icon={<AddIcon />}
                path={path}
            ></NavbarButton>
            <NavbarButton
                style={NavbarButton.styles.GRAY}
                icon={<FilterIcon />}
            ></NavbarButton>
            <NavbarButton
                style={NavbarButton.styles.GRAY}
                icon={<SearchIcon />}
            ></NavbarButton>
            <NavbarButton
                style={NavbarButton.styles.GRAY}
                icon={<PersonIcon />}
                path={userPagePath}
            ></NavbarButton>
        </div>
    );
};

export default RecipesListNavbar;
