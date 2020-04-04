import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";
import RecipeContentHeader from "../RecipeContentHeader/RecipeContetHeader";

import { recipeMock } from "./pizza1";

import "./Recipe.css";
import RecipeContentMain from "../RecipeContentMain/RecipeContentMain";

const Recipe = () => {
    const [recipe, updateRecipe] = useState({});
    const [isLoading, changeLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios
            // .get(`https://test-chat-bany.herokuapp.com/recipe/${id}`)
            .get(`http://localhost:3000/recipe/${id}`)
            .then((res) => {
                // use JSON.stringify here and on backend JSON to string??
                // const recipe = JSON.stringify(res);
                // updateRecipe(recipe.data)

                // BYĆ MOŻE AXIOS JUŻ ZROBIŁ STRINGIFY I TRZEBA TYLKO NA BACKENDZIE?

                console.log("server response", res.data);
                updateRecipe(res.data);
                changeLoading(false);
            });
    }, [id]);

    return (
        <div className="recipe">
            <RecipeNavbar />
            {isLoading && <div>spinner</div>}
            {!isLoading && (
                <div className="recipe-content">
                    <RecipeContentHeader
                        data={recipe.generalData}
                        id={recipe.id}
                    />
                    <RecipeContentMain data={recipe.recipeMain} />
                </div>
            )}
        </div>
    );
};

export default Recipe;
