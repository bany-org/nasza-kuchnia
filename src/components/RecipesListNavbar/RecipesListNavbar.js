import React, { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import NavbarButton from "../NavbarButton/NavbarButton";
import AddIcon from "../../assets/AddIcon/AddIcon";
import FilterIcon from "../../assets/FilterIcon/FilterIcon";
import SearchIcon from "../../assets/SearchIcon/SearchIcon";
import PersonIcon from "../../assets/PersonIcon/PersonIcon";

import "./RecipesListNavbar.css";

import styled from "styled-components";

const Navbar = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

// const ListNavbarButton = styled(NavbarButton)`
//     min-width: 37px;
//     height: 37px;
//     border-radius: 30px;
//     background-color: #f6f1e9;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 5px;

//     color: inherit;
//     border: none;
//     font: inherit;
//     cursor: pointer;
//     outline: inherit;
// `;

const RecipesListNavbar = () => {
    const UserCTX = useContext(UserContext);
    const { loggedIn } = UserCTX;

    const path = loggedIn ? "/new/recipe" : "/login/info";
    const userPagePath = loggedIn ? "/user" : "/login";

    return (
        <Navbar>
            <span className="recipes-list-navbar__title">Nasza kuchnia</span>
            <NavbarButton
                // style={NavbarButton.styles.GRAY}
                color="gray"
                icon={<AddIcon />}
                path={path}
            ></NavbarButton>
            <NavbarButton
                // style={NavbarButton.styles.GRAY}
                color="gray"
                icon={<FilterIcon />}
            ></NavbarButton>
            <NavbarButton
                // style={NavbarButton.styles.GRAY}
                color="gray"
                icon={<SearchIcon />}
            ></NavbarButton>
            <NavbarButton
                // style={NavbarButton.styles.GRAY}
                color="gray"
                icon={<PersonIcon />}
                path={userPagePath}
            ></NavbarButton>
        </Navbar>
    );
};

export default RecipesListNavbar;
