import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../contexts/UserContext";

import RecipeCard from "../RecipeCard/RecipeCard";
import NavbarButton from "../NavbarButton/NavbarButton";
import AddIcon from "../../assets/AddIcon/AddIcon";
import FilterIcon from "../../assets/FilterIcon/FilterIcon";
import SearchIcon from "../../assets/SearchIcon/SearchIcon";
import PersonIcon from "../../assets/PersonIcon/PersonIcon";

import "./RecipesList.css";

const RecipesList = () => {
    const [recipesList, updateRecipesList] = useState({});
    const [isLoading, changeLoading] = useState(true);

    const UserCTX = useContext(UserContext);
    const { loggedIn } = UserCTX;

    const path = loggedIn ? "/new/recipe" : "/login/info";
    const userPagePath = loggedIn ? "/user" : "/login";

    useEffect(() => {
        axios
            .get(`https://test-chat-bany.herokuapp.com/recipes`)
            // .get(`http://localhost:3000/recipes`)
            .then((res) => {
                updateRecipesList(res.data);
                changeLoading(false);
            });
    }, []);

    return (
        <div className="recipes-list">
            <div className="recipes-list-header">
                <span className="recipes-list-header--title">
                    Nasza kuchnia
                </span>
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
            {isLoading && <div>spinner</div>}
            {!isLoading &&
                recipesList.map((elem) => {
                    return (
                        <NavLink
                            exact
                            to={`/recipe/${elem.id}`}
                            className="recipes-list-item"
                            key={elem.id}
                        >
                            <RecipeCard
                                key={elem.id}
                                recipe={elem}
                            ></RecipeCard>
                        </NavLink>
                    );
                })}
        </div>
    );
};

export default RecipesList;
