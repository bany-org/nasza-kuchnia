import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import RecipeCard from "../RecipeCard/RecipeCard";
import RecipesListNavbar from "../RecipesListNavbar/RecipesListNavbar";

import "./RecipesList.css";

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
            <RecipesListNavbar />
            <div className="recipes-list-container">
                {isLoading && <div>lodading</div>}
                {!isLoading &&
                    recipesList.map((elem) => {
                        return (
                            <NavLink
                                exact
                                to={`/recipe/${elem.id}`}
                                className="recipes-list-container__item"
                                key={elem.id}
                            >
                                <RecipeCard
                                    generalData={elem.generalData}
                                ></RecipeCard>
                            </NavLink>
                        );
                    })}
            </div>
        </div>
    );
};

export default RecipesList;
