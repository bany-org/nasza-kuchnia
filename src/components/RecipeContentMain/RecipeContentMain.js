import React, { useState } from "react";

import "./RecipeContentMain.css";

const RecipeContentMain = ({ data }) => {
    const [ingredientsTab, changeTab] = useState(true);
    const [clickedIngredientsArray, toggleItem] = useState([]);
    const [clickedIngredientsArray2, toggleItem2] = useState([]);

    const changetoTrue = () => changeTab(true);
    const changeTofalse = () => changeTab(false);

    const addToState = (e) => {
        const name = e.target?.attributes.name?.value;
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

    const addToState2 = (e) => {
        let name = e.target?.attributes.name?.value;

        if (name === "child") {
            e.target.parentElement.classList.toggle(
                "preparation-list-item--clicked"
            );

            name = e.target.parentElement.attributes.name?.value;
        } else {
            e.target.classList.toggle("preparation-list-item--clicked");
        }

        const index = clickedIngredientsArray2.indexOf(name);
        const myarr = [...clickedIngredientsArray2];

        if (index === -1) {
            toggleItem2([...clickedIngredientsArray2, name]);
        } else {
            myarr.splice(index, 1);
            toggleItem2(myarr);
        }
    };

    const stop = (e) => {
        e.stopPropagation();
        return;
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
                                <div className="path" onClick={stop}></div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <ul className="ingredients-list">
                    {Object.keys(data.preparation).map((elem) => {
                        let myClass = "preparation-list-item";
                        if (clickedIngredientsArray2.indexOf(elem) !== -1) {
                            myClass =
                                "preparation-list-item preparation-list-item--clicked";
                        }
                        return (
                            <li
                                key={elem}
                                name={elem}
                                onClick={(e) => addToState2(e)}
                                className={myClass}
                            >
                                <span
                                    className="preparation-list-item__header"
                                    // onClick={stop}
                                    name="child"
                                >
                                    Krok {elem}
                                </span>
                                <div
                                    className="preparation-list-item__content"
                                    name="child"
                                    // onClick={stop}
                                >
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
