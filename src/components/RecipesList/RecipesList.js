import React from "react";
import { NavLink } from "react-router-dom";

const list = [
    {
        id: 1,
        name: "Przepis 1",
    },
    {
        id: 2,
        name: "Przepis 2",
    },
    {
        id: 3,
        name: "Przepis 3",
    },
];

const RecipesList = () => {
    return (
        <div>
            {list.map((elem) => {
                return (
                    <NavLink
                        exact
                        to={`/recipe/${elem.id}`}
                        className="nav-item"
                        // activeClassName="selected"
                        key={elem.id}
                    >
                        <div key={elem.id}>
                            <h1>{elem.name}</h1>
                            <p>{elem.id}</p>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default RecipesList;
