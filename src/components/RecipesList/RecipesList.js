import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import RecipeCard from "../RecipeCard/RecipeCard";
import NavbarButton from "../NavbarButton/NavbarButton";
import AddIcon from "../../assets/AddIcon/AddIcon";
import FilterIcon from "../../assets/FilterIcon/FilterIcon";
import SearchIcon from "../../assets/SearchIcon/SearchIcon";

import "./RecipesList.css";
import PersonIcon from "../../assets/PersonIcon/PersonIcon";

const RecipesList = () => {
    const [recipesList, updateRecipesList] = useState({});
    const [isLoading, changeLoading] = useState(true);

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
                {/* <div className="recipes-list-header--logo">
                    <Logo />
                </div> */}
                <span className="recipes-list-header--title">
                    Nasza kuchnia
                </span>
                <NavbarButton
                    style={NavbarButton.styles.GRAY}
                    icon={<AddIcon />}
                    path="/login"
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
                    path="/user"
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
