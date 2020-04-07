import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";
import RecipeContentMain from "../RecipeContentMain/RecipeContentMain";

import RecipeSkeleton from "./Recipe.components";
import "./Recipe.css";
import RecipeCard from "../RecipeCard/RecipeCard";

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
                        <RecipeCard
                            generalData={recipe.generalData}
                            style={RecipeCard.STYLES.RECIPE_OPEN}
                        />
                        <RecipeContentMain data={recipe.recipeMain} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Recipe;
