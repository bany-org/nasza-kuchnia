import React from "react";

import ClockIcon from "../assets/ClockIcon/ClockIcon";
import FaceIcon from "../assets/FaceIcon/FaceIcon";
import CakeIcon from "../assets/CakeIcon/CakeIcon";

import HamburgerPlaceholder from "../assets/HamburgerPlaceholder/HamburgerPlaceholder";

import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            {/* <img
                src={hamplaceholder}
                alt="pizza"
                
            /> */}
            <div className="recipe-card__image">
                <HamburgerPlaceholder />
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
                        około {recipe.generalData.time}
                    </span>
                    <span className="recipe-card__meta--separator">|</span>
                    <span className="recipe-card__meta--time">
                        <FaceIcon />
                    </span>
                    <span className="recipe-card__meta--time">
                        dla {recipe.generalData.people} osób
                    </span>
                    <span className="recipe-card__meta--separator">|</span>
                    <span className="recipe-card__meta--time">
                        <CakeIcon />
                    </span>
                    <span className="recipe-card__meta--time">
                        {recipe.generalData.type}
                    </span>
                </div>
                <div className="recipe-card__meta--time">
                    <span>
                        Autor: autor
                        {/* {props.data.author} */}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
