import React from "react";

import ClockIcon from "../../assets/ClockIcon/ClockIcon";
import FaceIcon from "../../assets/FaceIcon/FaceIcon";

import CakeIcon from "../../assets/CakeIcon/CakeIcon";
import SaladIcon from "../../assets/SaladIcon/SaladIcon";
import MealIcon from "../../assets/MealIcon/MealIcon";
import SoupIcon from "../../assets/SoupIcon/SoupIcon";
import FastfoodIcon from "../../assets/FastfoodIcon/FastfoodIcon";
import DishIcon from "../../assets/DishIcon/DishIcon";
import CupcakeIcon from "../../assets/CupcakeIcon/CupcakeIcon";

import HamburgerPlaceholder from "../../assets/HamburgerPlaceholder/HamburgerPlaceholder";
import CakePlaceholder from "../../assets/CakePlaceholder/CakePlaceholder";
import SaladPlaceholder from "../../assets/SaladPlaceholder/SaladPlaceholder";
import SoupPlaceholder from "../../assets/SoupPlaceholder/SoupPlaceholder";
import CupcakePlaceholder from "../../assets/CupcakePlaceholder/CupcakePlaceholder";
import MealPlaceholder from "../../assets/MealPlaceholder/MealPlaceholder";
import DishPlaceholder from "../../assets/DishPlaceholder/DishPlaceholder";

import { RECIPE_TYPES } from "../../constants";
import { RECIPE_TYPES_TRANSLATIONS } from "../../i18n";

import "./RecipeCard.css";

const STYLES = {
    LIST_CARD: "recipe-card-list",
    RECIPE_OPEN: "recipe-card-open",
};

const RecipeCard = ({ generalData, style = STYLES.LIST_CARD }) => {
    return (
        <div className={style}>
            <div className="recipe-card__image">
                {generalData.type === RECIPE_TYPES.SALAD && (
                    <SaladPlaceholder />
                )}
                {generalData.type === RECIPE_TYPES.CAKE && <CakePlaceholder />}
                {generalData.type === RECIPE_TYPES.FASTFOOD && (
                    <HamburgerPlaceholder />
                )}
                {generalData.type === RECIPE_TYPES.SOUP && <SoupPlaceholder />}
                {generalData.type === RECIPE_TYPES.CUPCAKE && (
                    <CupcakePlaceholder />
                )}
                {generalData.type === RECIPE_TYPES.MEAL && <MealPlaceholder />}
                {generalData.type === RECIPE_TYPES.DISH && <DishPlaceholder />}
            </div>

            <div className="recipe-card__content">
                <div className="recipe-card__recipe-name">
                    {generalData.name}
                </div>
                <div className="recipe-card__recipe-meta">
                    <span className="recipe-card__recipe-meta-element">
                        <ClockIcon />
                    </span>
                    <span className="recipe-card__recipe-meta-element">
                        {generalData.time}
                    </span>
                    <span>|</span>
                    <span className="recipe-card__recipe-meta-element">
                        <FaceIcon />
                    </span>
                    <span className="recipe-card__recipe-meta-element">
                        {`${generalData.people}`}
                    </span>
                    <span>|</span>
                    <span className="recipe-card__recipe-meta-element">
                        {generalData.type === RECIPE_TYPES.SALAD && (
                            <SaladIcon />
                        )}
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
                    </span>
                    <span className="recipe-card__recipe-meta-element">
                        {RECIPE_TYPES_TRANSLATIONS[generalData.type]}
                    </span>
                </div>
                <div className="recipe-card__recipe-meta-element">
                    <span>{`Autor: ${generalData.author}`}</span>
                </div>
            </div>
        </div>
    );
};

RecipeCard.STYLES = STYLES;

export default RecipeCard;
