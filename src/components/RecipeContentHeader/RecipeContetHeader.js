import React from "react";

import ClockIcon from "../assets/ClockIcon/ClockIcon";
import FaceIcon from "../assets/FaceIcon/FaceIcon";
import CakeIcon from "../assets/CakeIcon/CakeIcon";

import HamburgerPlaceholder from "../assets/HamburgerPlaceholder/HamburgerPlaceholder";
import CakePlaceholder from "../assets/CakePlaceholder/CakePlaceholder";
import SaladPlaceholder from "../assets/SaladPlaceholder/SaladPlaceholder";
import SoupPlaceholder from "../assets/SoupPlaceholder/SoupPlaceholder";
import CupcakePlaceholder from "../assets/CupcakePlaceholder/CupcakePlaceholder";
import MealPlaceholder from "../assets/MealPlaceholder/MealPlaceholder";
import DishPlaceholder from "../assets/DishPlaceholder/DishPlaceholder";

import "./RecipeContentHeader.css";

const RecipeContetHeader = (props) => {
    return (
        <div className="recipe-content-header">
            <div className="recipe-content__image">
                {props.id === "1" && <SaladPlaceholder />}
                {props.id === "2" && <CakePlaceholder />}
                {props.id === "3" && <HamburgerPlaceholder />}
                {props.id === "4" && <SoupPlaceholder />}
                {props.id === "5" && <CupcakePlaceholder />}
                {props.id === "6" && <MealPlaceholder />}
                {props.id === "7" && <DishPlaceholder />}
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
                        około {props.data.time}
                    </span>
                    <span className="recipe-content-header__meta--separator">
                        |
                    </span>
                    <span className="recipe-content-header__meta--time">
                        <FaceIcon />
                    </span>
                    <span className="recipe-content-header__meta--time">
                        dla {props.data.people} osób
                    </span>
                    <span className="recipe-content-header__meta--separator">
                        |
                    </span>
                    <span className="recipe-content-header__meta--time">
                        <CakeIcon />
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
