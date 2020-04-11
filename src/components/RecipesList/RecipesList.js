import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import RecipeCard from "../RecipeCard/RecipeCard";
import RecipesListNavbar from "../RecipesListNavbar/RecipesListNavbar";

const RecipeListContainder = styled.div`
    padding: 10px;
`;

const NavbarLink = styled(NavLink)`
    text-decoration: none;
`;

const RecipesList = () => {
    const [recipesList, updateRecipesList] = useState({});
    const [isLoading, changeLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://test-chat-bany.herokuapp.com/recipes`)
            // .get(`http://localhost:3000/recipes`)
            .then((res) => {
                updateRecipesList(res.data);
                changeLoading(false);
            });
    }, []);

    return (
        <>
            <RecipesListNavbar />
            <RecipeListContainder>
                {isLoading && <div>lodading</div>}
                {!isLoading &&
                    recipesList.map((elem) => {
                        return (
                            <NavbarLink
                                exact
                                to={`/recipe/${elem.id}`}
                                className="recipes-list-container__item"
                                key={elem.id}
                            >
                                <RecipeCard
                                    generalData={elem.generalData}
                                ></RecipeCard>
                            </NavbarLink>
                        );
                    })}
            </RecipeListContainder>
        </>
    );
};

export default RecipesList;
