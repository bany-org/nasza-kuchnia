import React from "react";
import { useParams, NavLink } from "react-router-dom";

const Recipe = () => {
    let { id } = useParams();
    return (
        <div>
            <h3>Przepis: {id}</h3>
            <p>To jest otwarty przepis na całą stronę</p>
            <NavLink
                exact
                to="/recipes"
                className="nav-item"
                // activeClassName="selected"
                // key={elem.id}
            >
                Wróć do listy przepisów
            </NavLink>
        </div>
    );
};

export default Recipe;
