import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import RecipeSkeleton from "./Recipe.components";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";
import RecipeContentMain from "../RecipeContentMain/RecipeContentMain";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeBody = styled.div`
    background-color: #f6f1e9;
`;

const RecipeContent = styled.div`
    margin: 0 10px 10px 10px;
    border-radius: 20px;
    box-shadow: 0 5px 5px 3px rgba(47, 47, 55, 0.21);
    border: solid 1px #ffb803;
    background-color: #ffb803;
    overflow: auto;
`;

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
        <RecipeBody>
            <RecipeNavbar />
            <RecipeContent>
                {isLoading ? (
                    <RecipeSkeleton />
                ) : (
                    <>
                        <RecipeCard
                            generalData={recipe.generalData}
                            recipeTop
                        />
                        <RecipeContentMain data={recipe.recipeMain} />
                    </>
                )}
            </RecipeContent>
        </RecipeBody>
    );
};

export default Recipe;
