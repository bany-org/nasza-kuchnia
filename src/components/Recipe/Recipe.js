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
            name: "świeże drożdże",
            quantity: "25",
            unit: "g",
        },
        {
            name: "ciepła woda",
            quantity: "150",
            unit: "ml",
        },
        {
            name: "cukier",
            quantity: "5",
            unit: "g",
        },
        {
            name: "mąka pszenna",
            quantity: "250",
            unit: "g",
        },
        {
            name: "sól",
            quantity: "5",
            unit: "g",
        },
        {
            name: "oliwa",
            quantity: "5",
            unit: "ml",
        },
    ],
    preparation: {
        1: "Świeże drożdże ocieplić w temperaturze pokojowej. Przygotować rozczyn: drożdże rozpuścić w ciepłej wodzie, dodać 2 łyżki mąki oraz cukier, dokładnie wymieszać i odstawić na ok. 10 minut do wyrośnięcia (rozczyn ze świeżych drożdży zwiększa objętość o ok. 3 razy - jeśli tak się nie stanie proces przygotowania rozczynu trzeba powtórzyć od nowa, natomiast rozczyn z drożdży instant może się tylko trochę spienić).",
        2: "Mąkę przesiać do miski, wymieszać z solą, zrobić wgłębienie w środku i wlać w nie rozczyn. Sukcesywnie zagarniać łyżką mąkę do środka i przez 2 - 3 minuty mieszać składniki, pod koniec dodając jeszcze oliwę.",
        3: "Połączone składniki wyłożyć na stolnicę oprószoną mąką. Wyrabiać przez ok. 15 minut aż ciasto będzie elastyczne i gładkie (ciasto można też zagnieść mikserem planetarnym)",
        4: "Wyrobione ciasto włożyć do dużej miski, przykryć ściereczką i odstawić na ok. 1 godzinę do wyrośnięcia",
        5: "Wyrośnięte ciasto wyjąć na stolnicę i chwilę pozagniatać. Podzielić na 2 części, uformować z nich kulki i odłożyć na ok. 7 minut pod ściereczką.",
        6: 'Blaszki (tortownice) posmarować oliwą. Włożyć na środek kulkę ciasta, delikatnie spłaszczyć i rozciągać, rozprowadzając palcami po całej powierzchni dna, zaczynając od środka i zostawiając niewielki "wałeczek" na brzegu (zob. zdjęcia poniżej). UWAGA: najlepiej robić to kilkoma etapami, ciasto na początku sprężynuje i "cofa się" ale jeśli odczekamy chwilę będziemy mogli je dalej rozciągać.',
        7: "Wyłożyć cienką warstwę SOSU POMIDOROWEGO, ser* oraz ulubione dodatki. Odczekać ok. 15 minut aż ciasto podrośnie, następnie piec w maksymalnie nagrzanym piekarniku (min. 250 st. C) przez ok. 10 minut.",
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
