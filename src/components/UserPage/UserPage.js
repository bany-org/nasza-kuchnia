import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import styled, { css } from "styled-components";

import RecipeNavbar from "../RecipeNavbar/RecipeNavbar";

const UserPageContent = styled.div`
    text-align: center;
`;

const UserPageButton = styled.button`
    background-color: #ffb803;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 20px;

    ${(props) =>
        props.logout &&
        css`
            background-color: #003a57;
        `}
`;

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
            <UserPageContent>
                <h2>Witaj: {UserCTX.userName}</h2>
                <p>Twoje przepisy</p>
                {UserCTX?.userRecipes.map((elem) => {
                    return (
                        <UserPageButton
                            onClick={() => history.push(`recipe/${elem}`)}
                        >
                            Przepis {elem}
                        </UserPageButton>
                    );
                })}
                <p>
                    ulubione przepisy nie są dostępne w wersji demonstracyjnej
                </p>
                <UserPageButton
                    onClick={() => {
                        UserCTX.logoutUser();
                        history.push("/recipes");
                    }}
                    logout
                >
                    Wyloguj
                </UserPageButton>
            </UserPageContent>
        </div>
    );
};

export default UserPage;
