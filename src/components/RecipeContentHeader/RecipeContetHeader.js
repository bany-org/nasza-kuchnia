import React from "react";

import ClockIcon from "../assets/ClockIcon/ClockIcon";
import FaceIcon from "../assets/FaceIcon/FaceIcon";
import CakeIcon from "../assets/CakeIcon/CakeIcon";

import img1 from "../assets/pizza.jpg";

import "./RecipeContentHeader.css";

const RecipeContetHeader = (props) => {
    return (
        <div className="recipe-content-header">
            <img
                src={img1}
                alt="pizza"
                className="recipe-content-header__image"
            />
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
