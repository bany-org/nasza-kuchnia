import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";
import TrashIcon from "../../assets/TrashIcon/TrashIcon";
import PencilIcon from "../../assets/PencilIcon/PencilIcon";
import AddIcon from "../../assets/AddIcon/AddIcon";

import "./RecipeNavbar.css";
import PersonIcon from "../../assets/PersonIcon/PersonIcon";

const RecipeNavbar = () => {
    const [isUserRecipe, setIsUserRecipe] = useState(false);
    const UserCTX = useContext(UserContext);
    const { loggedIn, userRecipes } = UserCTX;
    const path = loggedIn ? "/new/recipe" : "/login/info";
    const userPagePath = loggedIn ? "/user" : "/login";

    const { id } = useParams();

    useEffect(() => {
        if (userRecipes.indexOf(parseInt(id)) !== -1) {
            console.log("zmiana na true");

            setIsUserRecipe(true);
        }
    }, [userRecipes, id]);

    console.log("czy to moje", isUserRecipe);

    return (
        <div className="recipe-navbar">
            <NavbarButton
                path="/recipes"
                exact
                label="Wróć do listy przepisów"
                icon={<BackArrow />}
            ></NavbarButton>
            <NavbarButton
                icon={<AddIcon />}
                path={path}
                style={NavbarButton.styles.GRAY}
            ></NavbarButton>
            {loggedIn && isUserRecipe && (
                <>
                    <NavbarButton
                        icon={<TrashIcon />}
                        path={`/remove/recipe/${id}`}
                    ></NavbarButton>
                    <NavbarButton
                        icon={<PencilIcon />}
                        path={`/edit/recipe/${id}`}
                    ></NavbarButton>
                </>
            )}
            <NavbarButton
                icon={<PersonIcon />}
                path={userPagePath}
                style={NavbarButton.styles.GRAY}
            ></NavbarButton>
        </div>
    );
};

export default RecipeNavbar;
