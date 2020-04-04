import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import RecipeCard from "../RecipeCard/RecipeCard";
import Logo from "../assets/Logo/Logo";

import "./RecipesList.css";

const RecipesList = () => {
    const [recipesList, updateRecipesList] = useState({});
    const [isLoading, changeLoading] = useState(true);

    useEffect(() => {
        axios
            // .get(`https://test-chat-bany.herokuapp.com/recipe/${id}`)
            .get(`http://localhost:3000/recipes`)
            .then((res) => {
                // use JSON.stringify here and on backend JSON to string??
                // const recipe = JSON.stringify(res);
                // updateRecipe(recipe.data)

                // BYĆ MOŻE AXIOS JUŻ ZROBIŁ STRINGIFY I TRZEBA TYLKO NA BACKENDZIE?

                console.log("server response recipes list", res.data);
                updateRecipesList(res.data);
                changeLoading(false);
            });
    }, []);

    return (
        <div className="recipes-list">
            <div className="recipes-list--logo">
                <Logo />
                <span className="recipes-list--title">Nasza kuchnia</span>
            </div>
            {isLoading && <div>spinner</div>}
            {!isLoading &&
                recipesList.map((elem) => {
                    return (
                        <NavLink
                            exact
                            to={`/recipe/${elem.id}`}
                            className="recipes-list-item"
                            // activeClassName="selected"
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
