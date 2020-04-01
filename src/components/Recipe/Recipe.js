import React, { useState } from "react";
import { useParams } from "react-router-dom";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";
import RecipeContentHeader from "../RecipeContentHeader/RecipeContetHeader";

import { recipeMock } from "./pizza1";

import "./Recipe.css";

const Recipe = () => {
    const [ingredientsTab, changeTab] = useState(true);
    let { id } = useParams();
    return (
        <div className="recipe">
            <RecipeNavbar />
            <div className="recipe-content">
                <RecipeContentHeader data={recipeMock.generalData} />
                <div className="recipe-content-main">
                    <button
                        type="button"
                        onClick={() => changeTab(true)}
                        className="recipe-main-button"
                    >
                        Składniki
                    </button>
                    <button
                        type="button"
                        onClick={() => changeTab(false)}
                        className="recipe-main-button"
                    >
                        Przepis
                    </button>
                    <div className="recipe-content-main--info">
                        Dotknij składnik, który chcesz wykreśilić bo już go masz
                    </div>
                    {ingredientsTab ? (
                        <ul className="ingredients-list">
                            {recipeMock.ingredients.map((elem) => (
                                <li
                                    key={elem.name}
                                    className="ingredients-list-item"
                                >{`${elem.name} ${elem.quantity} ${elem.unit}`}</li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="ingredients-list">
                            {Object.keys(recipeMock.preparation).map((elem) => {
                                return (
                                    <li
                                        key={elem}
                                        className="preparation-list-item"
                                    >
                                        <span className="preparation-list-item__header">
                                            Krok {elem}
                                        </span>
                                        <div className="preparation-list-item__content">
                                            {recipeMock.preparation[elem]}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
