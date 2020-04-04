import React from "react";

import ClockIcon from "../assets/ClockIcon/ClockIcon";
import FaceIcon from "../assets/FaceIcon/FaceIcon";

import CakeIcon from "../assets/CakeIcon/CakeIcon";
import SaladIcon from "../assets/SaladIcon/SaladIcon";
import MealIcon from "../assets/MealIcon/MealIcon";
import SoupIcon from "../assets/SoupIcon/SoupIcon";
import FastfoodIcon from "../assets/FastfoodIcon/FastfoodIcon";
import DishIcon from "../assets/DishIcon/DishIcon";
import CupcakeIcon from "../assets/CupcakeIcon/CupcakeIcon";

import HamburgerPlaceholder from "../assets/HamburgerPlaceholder/HamburgerPlaceholder";
import CakePlaceholder from "../assets/CakePlaceholder/CakePlaceholder";
import SaladPlaceholder from "../assets/SaladPlaceholder/SaladPlaceholder";
import SoupPlaceholder from "../assets/SoupPlaceholder/SoupPlaceholder";
import CupcakePlaceholder from "../assets/CupcakePlaceholder/CupcakePlaceholder";
import MealPlaceholder from "../assets/MealPlaceholder/MealPlaceholder";
import DishPlaceholder from "../assets/DishPlaceholder/DishPlaceholder";

import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <div className="recipe-card__image">
                {recipe.generalData.type === "salad" && <SaladPlaceholder />}
                {recipe.generalData.type === "cake" && <CakePlaceholder />}
                {recipe.generalData.type === "fastfood" && (
                    <HamburgerPlaceholder />
                )}
                {recipe.generalData.type === "soup" && <SoupPlaceholder />}
                {recipe.generalData.type === "cupcake" && (
                    <CupcakePlaceholder />
                )}
                {recipe.generalData.type === "meal" && <MealPlaceholder />}
                {recipe.generalData.type === "dish" && <DishPlaceholder />}
            </div>

            <div className="recipe-card--info">
                <div className="recipe-card--name">
                    {recipe.generalData.name}
                </div>
                <div className="recipe-card__meta">
                    <span className="recipe-card__meta--time">
                        <ClockIcon />
                    </span>
                    <span className="recipe-card__meta--time">
                        {recipe.generalData.time}
                    </span>
                    <span className="recipe-card__meta--separator">|</span>
                    <span className="recipe-card__meta--time">
                        <FaceIcon />
                    </span>
                    <span className="recipe-card__meta--time">
                        {`dla ${recipe.generalData.people}`}
                    </span>
                    <span className="recipe-card__meta--separator">|</span>
                    <span className="recipe-card__meta--time">
                        {recipe.generalData.type === "salad" && <SaladIcon />}
                        {recipe.generalData.type === "cake" && <CakeIcon />}
                        {recipe.generalData.type === "fastfood" && (
                            <FastfoodIcon />
                        )}
                        {recipe.generalData.type === "soup" && <SoupIcon />}
                        {recipe.generalData.type === "cupcake" && (
                            <CupcakeIcon />
                        )}
                        {recipe.generalData.type === "meal" && <MealIcon />}
                        {recipe.generalData.type === "dish" && <DishIcon />}
                    </span>
                    <span className="recipe-card__meta--time">
                        {recipe.generalData.type}
                    </span>
                </div>
                <div className="recipe-card__meta--time">
                    <span>{`Autor: ${recipe.generalData.author}`}</span>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
