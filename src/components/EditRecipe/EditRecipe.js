import React from "react";
import { useParams } from "react-router-dom";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";

const EditRecipe = () => {
    const { id } = useParams();

    return (
        <div>
            <RecipeNavbar />
            <h3>Edycja przepisu jeszcze nie jest dostępna</h3>
        </div>
    );
};

export default EditRecipe;
