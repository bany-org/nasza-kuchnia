import React from "react";

export const RecipeCardIngredients = (props) => {
    return (
        <div className="recipe-card-ingredients">
            Składniki
            <ul>
                {props.ingredients &&
                    props.ingredients.slice(0, 4).map((elem, i) => {
                        return <li>{`${elem.name} ${elem.quantity}`}</li>;
                    })}
            </ul>
        </div>
    );
};

export const RecipeCardPreparation = (props) => {
    return (
        <div className="recipe-card-ingredients">
            Przygotowanie
            {props.preparation && (
                <ol>
                    <li>{props.preparation[1]}</li>
                    <li>{props.preparation[2]}</li>
                    <li>{props.preparation[3]}</li>
                </ol>
            )}
        </div>
    );
};
