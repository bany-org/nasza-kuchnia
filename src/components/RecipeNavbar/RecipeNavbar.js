import React, { useContext, useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";
import TrashIcon from "../../assets/TrashIcon/TrashIcon";
import PencilIcon from "../../assets/PencilIcon/PencilIcon";
import AddIcon from "../../assets/AddIcon/AddIcon";
import PersonIcon from "../../assets/PersonIcon/PersonIcon";

const Navbar = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const RecipeNavbar = () => {
    const [isUserRecipe, setIsUserRecipe] = useState(false);
    const UserCTX = useContext(UserContext);
    const { loggedIn, userRecipes } = UserCTX;

    const path = loggedIn ? "/new/recipe" : "/login/info";
    const userPagePath = loggedIn ? "/user" : "/login";

    const { id } = useParams();
    const isRemoveView = useRouteMatch("/remove");
    const isEditView = useRouteMatch("/edit");
    const returnPath =
        isRemoveView || isEditView ? `/recipe/${id}` : "/recipes";

    useEffect(() => {
        if (userRecipes.indexOf(parseInt(id)) !== -1) {
            setIsUserRecipe(true);
        }
    }, [userRecipes, id]);

    return (
        <Navbar>
            <NavbarButton
                path={returnPath}
                exact
                label="Wróć"
                icon={<BackArrow />}
            ></NavbarButton>
            <NavbarButton
                icon={<AddIcon />}
                path={path}
                color="gray"
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
                color="gray"
            ></NavbarButton>
        </Navbar>
    );
};

export default RecipeNavbar;
