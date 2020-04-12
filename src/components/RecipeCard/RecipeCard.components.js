import React from "react";
import styled, { css } from "styled-components";

import { RECIPE_TYPES } from "../../constants";
import { RECIPE_TYPES_TRANSLATIONS } from "../../i18n";

import HamburgerPlaceholder from "../../assets/HamburgerPlaceholder/HamburgerPlaceholder";
import CakePlaceholder from "../../assets/CakePlaceholder/CakePlaceholder";
import SaladPlaceholder from "../../assets/SaladPlaceholder/SaladPlaceholder";
import SoupPlaceholder from "../../assets/SoupPlaceholder/SoupPlaceholder";
import CupcakePlaceholder from "../../assets/CupcakePlaceholder/CupcakePlaceholder";
import MealPlaceholder from "../../assets/MealPlaceholder/MealPlaceholder";
import DishPlaceholder from "../../assets/DishPlaceholder/DishPlaceholder";

import ClockIcon from "../../assets/ClockIcon/ClockIcon";
import FaceIcon from "../../assets/FaceIcon/FaceIcon";
import CakeIcon from "../../assets/CakeIcon/CakeIcon";
import SaladIcon from "../../assets/SaladIcon/SaladIcon";
import MealIcon from "../../assets/MealIcon/MealIcon";
import SoupIcon from "../../assets/SoupIcon/SoupIcon";
import FastfoodIcon from "../../assets/FastfoodIcon/FastfoodIcon";
import DishIcon from "../../assets/DishIcon/DishIcon";
import CupcakeIcon from "../../assets/CupcakeIcon/CupcakeIcon";

const ImgPlaceholder = styled.div`
    min-width: 100px;
    overflow: hidden;
    @media (max-width: 320px) {
        display: none;
    }
    ${(props) =>
        props.recipeTop &&
        css`
            @media (min-width: 800px) {
                background-color: white;
                width: 40%;
                & > svg {
                    display: none;
                }
            }
        `};
`;

export const ImagePlaceholder = ({ type, recipeTop }) => {
    return (
        <ImgPlaceholder recipeTop={recipeTop}>
            {type === RECIPE_TYPES.SALAD && <SaladPlaceholder />}
            {type === RECIPE_TYPES.CAKE && <CakePlaceholder />}
            {type === RECIPE_TYPES.FASTFOOD && <HamburgerPlaceholder />}
            {type === RECIPE_TYPES.SOUP && <SoupPlaceholder />}
            {type === RECIPE_TYPES.CUPCAKE && <CupcakePlaceholder />}
            {type === RECIPE_TYPES.MEAL && <MealPlaceholder />}
            {type === RECIPE_TYPES.DISH && <DishPlaceholder />}
        </ImgPlaceholder>
    );
};

const Content = styled.div`
    width: 100%;
    box-shadow: 0 10px 10px 5px rgba(47, 47, 55, 0.21);
    border: solid 1px #ffcd32;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2px 5px;
    color: #000000;
    font-family: Playfair Display, serif;
    ${(props) =>
        props.recipeTop &&
        css`
            border-radius: 0px 20px 0 0;
        `};
    @media (max-width: 320px) {
        border-radius: 20px;
        align-items: center;
    }
`;

const Name = styled.div`
    font-size: 21px;
    font-weight: bold;
    text-align: left;
    ${(props) =>
        props.recipeTop &&
        css`
            border-radius: 0px 20px 0 0;
            @media (min-width: 800px) {
                font-size: 30px;
            }
        `};
    @media (max-width: 320px) {
        text-align: center;
    }
`;

const AdditionalInfo = styled.div`
    justify-content: flex-start;
    align-items: center;
    display: flex;
`;

const AdditionalInfoElement = styled.span`
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
`;

export const RecipeContent = ({ generalData, recipeTop }) => {
    return (
        <Content recipeTop={recipeTop}>
            <Name recipeTop={recipeTop}>{generalData.name}</Name>
            <AdditionalInfo>
                <AdditionalInfoElement>
                    <ClockIcon />
                </AdditionalInfoElement>
                <AdditionalInfoElement>
                    {generalData.time}
                </AdditionalInfoElement>
                <span>|</span>
                <AdditionalInfoElement>
                    <FaceIcon />
                </AdditionalInfoElement>
                <AdditionalInfoElement>
                    {`${generalData.people}`}
                </AdditionalInfoElement>
                <span>|</span>
                <AdditionalInfoElement>
                    {generalData.type === RECIPE_TYPES.SALAD && <SaladIcon />}
                    {generalData.type === RECIPE_TYPES.CAKE && <CakeIcon />}
                    {generalData.type === RECIPE_TYPES.FASTFOOD && (
                        <FastfoodIcon />
                    )}
                    {generalData.type === RECIPE_TYPES.SOUP && <SoupIcon />}
                    {generalData.type === RECIPE_TYPES.CUPCAKE && (
                        <CupcakeIcon />
                    )}
                    {generalData.type === RECIPE_TYPES.MEAL && <MealIcon />}
                    {generalData.type === RECIPE_TYPES.DISH && <DishIcon />}
                </AdditionalInfoElement>
                <AdditionalInfoElement>
                    {RECIPE_TYPES_TRANSLATIONS[generalData.type]}
                </AdditionalInfoElement>
            </AdditionalInfo>
            <AdditionalInfo>
                <AdditionalInfoElement>
                    <span>{`Dodała: ${generalData.author}`}</span>
                </AdditionalInfoElement>
            </AdditionalInfo>
        </Content>
    );
};
