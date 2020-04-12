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

const NavigationSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

const NavigationElement = styled.div`
    margin: 0 2px;
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
            />
            <NavigationSection>
                <NavigationElement>
                    <NavbarButton icon={<AddIcon />} path={path} color="gray" />
                </NavigationElement>
                {loggedIn && isUserRecipe && (
                    <NavigationElement>
                        <NavbarButton
                            icon={<TrashIcon />}
                            path={`/remove/recipe/${id}`}
                        />
                    </NavigationElement>
                )}
                {loggedIn && isUserRecipe && (
                    <NavigationElement>
                        <NavbarButton
                            icon={<PencilIcon />}
                            path={`/edit/recipe/${id}`}
                        />
                    </NavigationElement>
                )}
                <NavigationElement>
                    <NavbarButton
                        icon={<PersonIcon />}
                        path={userPagePath}
                        color="gray"
                    />
                </NavigationElement>
            </NavigationSection>
        </Navbar>
    );
};

export default RecipeNavbar;
