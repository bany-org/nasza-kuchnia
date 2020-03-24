import React from "react";

import {
    RecipeCardIngredients,
    RecipeCardPreparation,
} from "./RecipeCard.components";

import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <div className="recipe-card-image">Obrazek</div>
            <div className="recipe-card-content">
                <div className="recipe-card-content__title">{recipe.name}</div>
                <span>............................</span>
                <div className="recipe-card-recipe-short">
                    <RecipeCardIngredients ingredients={recipe.ingredients} />
                    <RecipeCardPreparation preparation={recipe.preparation} />
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
