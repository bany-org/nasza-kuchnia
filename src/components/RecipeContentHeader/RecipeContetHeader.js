import React from "react";

import ClockIcon from "../../assets/ClockIcon/ClockIcon";
import FaceIcon from "../../assets/FaceIcon/FaceIcon";

import HamburgerPlaceholder from "../../assets/HamburgerPlaceholder/HamburgerPlaceholder";
import CakePlaceholder from "../../assets/CakePlaceholder/CakePlaceholder";
import SaladPlaceholder from "../../assets/SaladPlaceholder/SaladPlaceholder";
import SoupPlaceholder from "../../assets/SoupPlaceholder/SoupPlaceholder";
import CupcakePlaceholder from "../../assets/CupcakePlaceholder/CupcakePlaceholder";
import MealPlaceholder from "../../assets/MealPlaceholder/MealPlaceholder";
import DishPlaceholder from "../../assets/DishPlaceholder/DishPlaceholder";

import CakeIcon from "../../assets/CakeIcon/CakeIcon";
import SaladIcon from "../../assets/SaladIcon/SaladIcon";
import MealIcon from "../../assets/MealIcon/MealIcon";
import SoupIcon from "../../assets/SoupIcon/SoupIcon";
import FastfoodIcon from "../../assets/FastfoodIcon/FastfoodIcon";
import DishIcon from "../../assets/DishIcon/DishIcon";
import CupcakeIcon from "../../assets/CupcakeIcon/CupcakeIcon";

import "./RecipeContentHeader.css";

const RecipeContetHeader = (props) => {
    return (
        <div className="recipe-content-header">
            <div className="recipe-content__image">
                {props.data.type === "salad" && <SaladPlaceholder />}
                {props.data.type === "cake" && <CakePlaceholder />}
                {props.data.type === "fastfood" && <HamburgerPlaceholder />}
                {props.data.type === "soup" && <SoupPlaceholder />}
                {props.data.type === "cupcake" && <CupcakePlaceholder />}
                {props.data.type === "meal" && <MealPlaceholder />}
                {props.data.type === "dish" && <DishPlaceholder />}
            </div>
            <div className="recipe-content-header--info">
                <div className="recipe-content-header--name">
                    {props.data.name}
                </div>
                <div className="recipe-content-header__meta">
                    <span className="recipe-content-header__meta--time">
                        <ClockIcon />
                    </span>
                    <span className="recipe-content-header__meta--time">
                        {props.data.time}
                    </span>
                    <span className="recipe-content-header__meta--separator">
                        |
                    </span>
                    <span className="recipe-content-header__meta--time">
                        <FaceIcon />
                    </span>
                    <span className="recipe-content-header__meta--time">
                        {`dla ${props.data.people}`}
                    </span>
                    <span className="recipe-content-header__meta--separator">
                        |
                    </span>
                    <span className="recipe-content-header__meta--time">
                        {props.data.type === "salad" && <SaladIcon />}
                        {props.data.type === "cake" && <CakeIcon />}
                        {props.data.type === "fastfood" && <FastfoodIcon />}
                        {props.data.type === "soup" && <SoupIcon />}
                        {props.data.type === "cupcake" && <CupcakeIcon />}
                        {props.data.type === "meal" && <MealIcon />}
                        {props.data.type === "dish" && <DishIcon />}
                    </span>
                    <span className="recipe-content-header__meta--time">
                        {props.data.type}
                    </span>
                </div>
                <div className="recipe-content-header__meta--time">
                    <span>Autor: {props.data.author}</span>
                </div>
            </div>
        </div>
    );
};

export default RecipeContetHeader;
