import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import RecipeCard from "../RecipeCard/RecipeCard";
import RecipesListNavbar from "../RecipesListNavbar/RecipesListNavbar";

const RecipeListContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
        flex-flow: wrap;
        justify-content: space-evenly;
    }
`;

const NavbarLink = styled(NavLink)`
    text-decoration: none;
    width: 100%;
    @media (min-width: 800px) {
        width: 48%;
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
            <RecipeListContainer>
                {isLoading && <div>loading</div>}
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
            </RecipeListContainer>
        </>
    );
};

export default RecipesList;
