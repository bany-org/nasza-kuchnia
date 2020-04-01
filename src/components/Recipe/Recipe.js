import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../assets/BackArrow/BackArrow";
import PrintIcon from "../assets/PrintIcon/PrintIcon";
import TrashIcon from "../assets/TrashIcon/TrashIcon";
import PencilIcon from "../assets/PencilIcon/PencilIcon";
import ClockIcon from "../assets/ClockIcon/ClockIcon";

import img1 from "../assets/pizza.jpg";

import "./Recipe.css";
import FaceIcon from "../assets/FaceIcon/FaceIcon";
import CakeIcon from "../assets/CakeIcon/CakeIcon";

const recipeMock = {
    id: 1,
    author: "Magda Gessler",
    name: "Domowa pizza",
    ingredients: [
        {
            name: "jabłka",
            quantity: "2",
            unit: "kg",
        },
        {
            name: "mąka",
            quantity: "1",
            unit: "kg",
        },
        {
            name: "jajka",
            quantity: "2",
            unit: "szt.",
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
                <NavbarButton
                    to="/recipes"
                    exact
                    label="Wróć do listy przepisów"
                    icon={<BackArrow />}
                ></NavbarButton>
                <NavbarButton icon={<PrintIcon />}></NavbarButton>
                <NavbarButton icon={<TrashIcon />}></NavbarButton>
                <NavbarButton icon={<PencilIcon />}></NavbarButton>
            </div>
            <div className="recipe-content">
                <div className="recipe-content-header">
                    <img
                        src={img1}
                        alt="pizza"
                        className="recipe-content-header--image"
                    />
                    <div className="recipe-content-header--info">
                        <div className="recipe-content-header--name">
                            {recipeMock.name}
                        </div>
                        <div className="recipe-content-header__meta">
                            <span className="recipe-content-header__meta--time">
                                <ClockIcon />
                            </span>
                            <span className="recipe-content-header__meta--time">
                                ponad 1h
                            </span>
                            <span className="recipe-content-header__meta--separator">
                                |
                            </span>
                            <span className="recipe-content-header__meta--time">
                                <FaceIcon />
                            </span>
                            <span className="recipe-content-header__meta--time">
                                8 osób
                            </span>
                            <span className="recipe-content-header__meta--separator">
                                |
                            </span>
                            <span className="recipe-content-header__meta--time">
                                <CakeIcon />
                            </span>
                            <span className="recipe-content-header__meta--time">
                                ciasto
                            </span>
                        </div>
                        <div className="recipe-content-header__meta--time">
                            <span>Autor: {recipeMock.author}</span>
                        </div>
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
