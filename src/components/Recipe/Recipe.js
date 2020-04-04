import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";
import RecipeContentHeader from "../RecipeContentHeader/RecipeContetHeader";
import RecipeContentMain from "../RecipeContentMain/RecipeContentMain";

import RecipeSkeleton from "./Recipe.components";
import "./Recipe.css";

const Recipe = () => {
    const [recipe, updateRecipe] = useState({});
    const [isLoading, changeLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://test-chat-bany.herokuapp.com/recipe/${id}`)
            // .get(`http://localhost:3000/recipe/${id}`)
            .then((res) => {
                updateRecipe(res.data);
                changeLoading(false);
            });
    }, [id]);

    return (
        <div className="recipe">
            <RecipeNavbar />
            <div className="recipe-content">
                {isLoading ? (
                    <RecipeSkeleton />
                ) : (
                    <>
                        <RecipeContentHeader
                            data={recipe.generalData}
                            id={recipe.id}
                        />
                        <RecipeContentMain data={recipe.recipeMain} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Recipe;
