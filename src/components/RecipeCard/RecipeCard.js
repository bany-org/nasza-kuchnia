import React from "react";
import styled, { css } from "styled-components";

import { ImagePlaceholder, RecipeContent } from "./RecipeCard.components";

const Card = styled.div`
    background-color: #ffffff;
    min-height: 130px;
    display: flex;
    border-radius: 20px;
    margin-bottom: 10px;
    overflow: hidden;
    ${(props) =>
        props.recipeTop &&
        css`
            background-color: #ffb803;
            margin-bottom: 0px;
            border-radius: 20px 20px 0 0;
        `};
    @media (min-width: 800px) {
    }
`;

const RecipeCard = ({ generalData, recipeTop }) => {
    return (
        <Card recipeTop={recipeTop}>
            <ImagePlaceholder recipeTop={recipeTop} type={generalData.type} />
            <RecipeContent recipeTop={recipeTop} generalData={generalData} />
        </Card>
    );
};

export default RecipeCard;
