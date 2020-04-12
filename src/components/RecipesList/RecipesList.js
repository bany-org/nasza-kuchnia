import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import RecipeCard from "../RecipeCard/RecipeCard";
import RecipesListNavbar from "../RecipesListNavbar/RecipesListNavbar";

const RecipeListContainder = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    flex: 1;
    @media (min-width: 1024px) {
        flex-flow: wrap;
        justify-content: space-evenly;
    }
`;

const NavbarLink = styled(NavLink)`
    text-decoration: none;
    max-width: 440px;
    width: 100%;
    @media (min-width: 1024px) {
        margin: 0px 10px;
    }
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
