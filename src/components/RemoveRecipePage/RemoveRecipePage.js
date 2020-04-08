import React from "react";
import { useParams } from "react-router-dom";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";

const RemoveRecipePage = () => {
    const { id } = useParams();

    return (
        <div>
            <RecipeNavbar />
            <h3>Usuwanie przepisu jeszcze nie jest dostępne</h3>
        </div>
    );
};

export default RemoveRecipePage;
