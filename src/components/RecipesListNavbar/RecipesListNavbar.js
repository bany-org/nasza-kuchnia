import React from "react";
import styled from "styled-components";

import NavbarButton from "../NavbarButton/NavbarButton";
import AddIcon from "../../assets/AddIcon/AddIcon";
import FilterIcon from "../../assets/FilterIcon/FilterIcon";
import SearchIcon from "../../assets/SearchIcon/SearchIcon";
import PersonIcon from "../../assets/PersonIcon/PersonIcon";

const Navbar = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 320px) {
        justify-content: center;
    }
`;

const Title = styled.span`
    height: 36px;
    object-fit: contain;
    font-family: Pacifico;
    font-size: 20px;
    color: #000000;
    @media (max-width: 320px) {
        display: none;
    }
`;

const Navigation = styled.div`
    display: flex;
    @media (max-width: 320px) {
        width: 100%;
        justify-content: space-evenly;
    }
`;

const RecipesListNavbar = () => {
    return (
        <Navbar>
            <Title>Nasza kuchnia</Title>
            <Navigation>
                <NavbarButton
                    color="gray"
                    icon={<AddIcon />}
                    path="/new/recipe"
                ></NavbarButton>
                <NavbarButton color="gray" icon={<FilterIcon />}></NavbarButton>
                <NavbarButton color="gray" icon={<SearchIcon />}></NavbarButton>
                <NavbarButton
                    color="gray"
                    icon={<PersonIcon />}
                    path="/user"
                ></NavbarButton>
            </Navigation>
        </Navbar>
    );
};

export default RecipesListNavbar;
