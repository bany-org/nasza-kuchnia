import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import "./Recipe.css";

const recipeMock = {
    id: 1,
    name: "Pizza domowa",
    ingredients: [
        {
            name: "jabłka",
            quantity: "2kg",
        },
        {
            name: "mąka",
            quantity: "1kg",
        },
        {
            name: "jajka",
            quantity: "2 szt.",
        },
    ],
    preparation: {
        1: "obrać jajka i wrzucić do wody",
        2: "mąkę rozsypać na podłodze",
        3: "zjeść jabłka (tylo bez pestek bo może drzewo w brzuchu wyrosnąć)",
        4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
};

const Recipe = () => {
    const [ingredientsTab, changeTab] = useState(true);
    let { id } = useParams();
    return (
        <div className="recipe">
            <div className="recipe-navbar">
                <NavLink
                    exact
                    to="/recipes"
                    className="nav-item"
                    // activeClassName="selected"
                    // key={elem.id}
                >
                    Wróć do listy przepisów
                </NavLink>
                drukuj (loguj lub usuń i edytuj)
            </div>
            <div className="recipe-content">
                <div className="recipe-content-header">
                    <div className="recipe-content-header--image">Image</div>
                    <div className="recipe-content-header--info">
                        Recipe info
                    </div>
                </div>
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
                    <p>
                        Dotknij składnik, który chcesz wykreśilić bo już go masz
                    </p>
                    {ingredientsTab ? (
                        <div>
                            <ul className="ingredients-list">
                                {recipeMock.ingredients.map((elem) => (
                                    <li
                                        key={elem.name}
                                        className="ingredients-list-item"
                                    >{`${elem.name} ${elem.quantity}`}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <ul className="ingredients-list">
                                {Object.keys(recipeMock.preparation).map(
                                    (elem) => {
                                        return (
                                            <li
                                                key={elem}
                                                className="ingredients-list-item"
                                            >
                                                <h5>Krok {elem}</h5>
                                                {recipeMock.preparation[elem]}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
