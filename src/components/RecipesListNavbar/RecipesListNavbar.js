import React, { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";

import NavbarButton from "../NavbarButton/NavbarButton";
import AddIcon from "../../assets/AddIcon/AddIcon";
import FilterIcon from "../../assets/FilterIcon/FilterIcon";
import SearchIcon from "../../assets/SearchIcon/SearchIcon";
import PersonIcon from "../../assets/PersonIcon/PersonIcon";

const Navbar = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.span`
    width: 123px;
    height: 36px;
    object-fit: contain;
    font-family: Pacifico;
    font-size: 20px;
    color: #000000;
`;

const RecipesListNavbar = () => {
    const UserCTX = useContext(UserContext);
    const { loggedIn } = UserCTX;

    const path = loggedIn ? "/new/recipe" : "/login/info";
    const userPagePath = loggedIn ? "/user" : "/login";

    return (
        <Navbar>
            <Title>Nasza kuchnia</Title>
            <NavbarButton
                color="gray"
                icon={<AddIcon />}
                path={path}
            ></NavbarButton>
            <NavbarButton color="gray" icon={<FilterIcon />}></NavbarButton>
            <NavbarButton color="gray" icon={<SearchIcon />}></NavbarButton>
            <NavbarButton
                color="gray"
                icon={<PersonIcon />}
                path={userPagePath}
            ></NavbarButton>
        </Navbar>
    );
};

export default RecipesListNavbar;
