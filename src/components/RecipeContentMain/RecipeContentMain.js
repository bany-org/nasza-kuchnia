import React, { useState } from "react";

import "./RecipeContentMain.css";

const RecipeContentMain = ({ data }) => {
    const [ingredientsTab, changeTab] = useState(true);
    const [clickedIngredientsArray, toggleItem] = useState([]);

    const changetoTrue = () => changeTab(true);
    const changeTofalse = () => changeTab(false);

    const addToState = (e) => {
        const name = e.target.attributes.name.value;
        e.target.classList.toggle("ingredients-list-item--clicked");

        const index = clickedIngredientsArray.indexOf(name);
        const myarr = [...clickedIngredientsArray];

        if (index === -1) {
            toggleItem([...clickedIngredientsArray, name]);
        } else {
            myarr.splice(index, 1);
            toggleItem(myarr);
        }
    };

    return (
        <div className="recipe-content-main">
            <button
                type="button"
                onClick={changetoTrue}
                className="recipe-main-button"
            >
                Składniki
            </button>
            <button
                type="button"
                onClick={changeTofalse}
                className="recipe-main-button"
            >
                Przepis
            </button>
            <div className="recipe-content-main--info">
                Dotknij składnik, który chcesz wykreśilić bo już go masz
            </div>
            {ingredientsTab ? (
                <ul className="ingredients-list">
                    {data.ingredients.map((elem, i) => {
                        console.log("mapowanie", clickedIngredientsArray, elem);
                        let myClass = "ingredients-list-item";
                        if (clickedIngredientsArray.indexOf(elem.name) !== -1) {
                            myClass =
                                "ingredients-list-item ingredients-list-item--clicked";
                        }

                        return (
                            <li
                                name={elem.name}
                                key={i}
                                onClick={(e) => addToState(e)}
                                className={myClass}
                            >
                                {`${elem.name} ${elem.quantity} ${elem.unit}`}
                                <div className="path"></div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <ul className="ingredients-list">
                    {Object.keys(data.preparation).map((elem, i) => {
                        return (
                            <li key={elem} className="preparation-list-item">
                                <span className="preparation-list-item__header">
                                    Krok {elem}
                                </span>
                                <div className="preparation-list-item__content">
                                    {data.preparation[elem]}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default RecipeContentMain;
