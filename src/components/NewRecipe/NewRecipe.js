import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";

const NewRecipe = () => {
    const UserCTX = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!UserCTX.loggedIn) {
            history.push("/login/info");
        }
    }, []);
    return (
        <>
            <RecipeNavbar />
            <h3>
                Dodawanie przepisu nie jest dostępne w wersji demonstracyjnej
            </h3>
        </>
    );
};

export default NewRecipe;
