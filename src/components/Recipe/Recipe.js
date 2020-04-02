import React from "react";
import { useParams } from "react-router-dom";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";
import RecipeContentHeader from "../RecipeContentHeader/RecipeContetHeader";

import { recipeMock } from "./pizza1";

import "./Recipe.css";
import RecipeContentMain from "../RecipeContentMain/RecipeContentMain";

const Recipe = () => {
    let { id } = useParams();

    return (
        <div className="recipe">
            <RecipeNavbar />
            <div className="recipe-content">
                <RecipeContentHeader data={recipeMock.generalData} />
                <RecipeContentMain data={recipeMock.recipeMain} />
            </div>
        </div>
    );
};

export default Recipe;
