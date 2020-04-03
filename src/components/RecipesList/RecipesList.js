import React from "react";
import { NavLink } from "react-router-dom";

import RecipeCard from "../RecipeCard/RecipeCard";
import Logo from "../assets/Logo/Logo";

import "./RecipesList.css";

const shortList = [
    {
        id: 1,
        generalData: {
            author: "Magda Gessler",
            name: "Sałatka grecka",
            time: "1h",
            people: "4",
            type: "ciasto",
        },
    },
    {
        id: 2,
        generalData: {
            author: "Magda Gessler",
            name: "Jabłecznik z bezą",
            time: "1h",
            people: "4",
            type: "ciasto",
        },
    },
    {
        id: 3,
        generalData: {
            author: "Magda Gessler",
            name: "Domowa pizza",
            time: "1h",
            people: "4",
            type: "ciasto",
        },
    },
    {
        id: 4,
        generalData: {
            author: "Magda Gessler",
            name: "Zupa na winie",
            time: "1h",
            people: "4",
            type: "ciasto",
        },
    },
    {
        id: 5,
        generalData: {
            author: "Magda Gessler",
            name: "Babeczki z czekoladą",
            time: "1h",
            people: "4",
            type: "ciasto",
        },
    },
    {
        id: 6,
        generalData: {
            author: "Magda Gessler",
            name: "Schabowe po śląsku",
            time: "1h",
            people: "4",
            type: "ciasto",
        },
    },
    {
        id: 7,
        generalData: {
            author: "Magda Gessler",
            name: "Kaczka po wiedeńsku",
            time: "1h",
            people: "4",
            type: "ciasto",
        },
    },
    // {
    //     id: 2,
    //     name: "Jabłecznik z bezą",
    // },
    // {
    //     id: 3,
    //     name: "Przepis 3",
    // },
    // {
    //     id: 4,
    //     name: "Przepis 4",
    // },
    // {
    //     id: 5,
    //     name: "Przepis 5",
    // },
    // {
    //     id: 6,
    //     name: "Przepis 6",
    // },
    // {
    //     id: 7,
    //     name: "Przepis 7",
    // },
    // {
    //     id: 8,
    //     name: "Przepis 8",
    // },
    // {
    //     id: 9,
    //     name: "Przepis 9",
    // },
    // {
    //     id: 10,
    //     name: "Przepis 10",
    // },
];

const RecipesList = () => {
    return (
        <div className="recipes-list">
            <div className="recipes-list--logo">
                <Logo />
                <span className="recipes-list--title">Nasza kuchnia</span>
            </div>
            {shortList.map((elem) => {
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
