import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";

import "./UserPage.css";

const UserPage = () => {
    const UserCTX = useContext(UserContext);

    useEffect(() => {
        if (!UserCTX.loggedIn) {
            history.push("login/");
        }
    }, []);

    const history = useHistory();

    return (
        <div>
            <RecipeNavbar />
            <div className="user-page">
                <h2>Witaj: {UserCTX.userName}</h2>
                <p>Twoje przepisy</p>
                {UserCTX?.userRecipes.map((elem) => {
                    return (
                        <button
                            type="button"
                            className="user-page__recipe-link"
                            onClick={() => history.push(`recipe/${elem}`)}
                        >
                            Przepis {elem}
                        </button>
                    );
                })}
                <p>
                    ulubione przepisy nie są dostępne w wersji demonstracyjnej
                </p>
                <button
                    type="button"
                    onClick={() => {
                        UserCTX.logoutUser();
                        history.push("/recipes");
                    }}
                    className="user-page__recipe-link--logout"
                >
                    Wyloguj
                </button>
            </div>
        </div>
    );
};

export default UserPage;
