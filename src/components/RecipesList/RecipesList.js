import React from "react";
import { NavLink } from "react-router-dom";

import RecipeCard from "../RecipeCard/RecipeCard";

import "./RecipesList.css";

const list = [
    {
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
        },
    },
    {
        id: 2,
        name: "Jabłecznik z bezą",
    },
    {
        id: 3,
        name: "Przepis 3",
    },
    {
        id: 4,
        name: "Przepis 4",
    },
    {
        id: 5,
        name: "Przepis 5",
    },
    {
        id: 6,
        name: "Przepis 6",
    },
    {
        id: 7,
        name: "Przepis 7",
    },
    {
        id: 8,
        name: "Przepis 8",
    },
    {
        id: 9,
        name: "Przepis 9",
    },
    {
        id: 10,
        name: "Przepis 10",
    },
];

const RecipesList = () => {
    return (
        <div className="recipes-list">
            <h1>Najwyżej ocenione (TOP 10)</h1>
            {list.map((elem) => {
                return (
                    <NavLink
                        exact
                        to={`/recipe/${elem.id}`}
                        className="recipes-list-item"
                        // activeClassName="selected"
                        key={elem.id}
                    >
                        <RecipeCard key={elem.id} recipe={elem}></RecipeCard>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default RecipesList;
