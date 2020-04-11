import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";
import MessImage from "../../assets/MessImage/MessImage";

const Body = styled.div`
    min-height: 100%;
    border: solid 1px #979797;
    background: linear-gradient(#ffb803 50%, #f6f1e9 50%);
    text-align: center;
`;

const PageNav = styled.div`
    padding: 10px;
`;

const ImageZone = styled.div`
    margin: 10px;
    text-align: center;
`;

const Main = styled.div`
    margin: 8px;
    border-radius: 19px;
    box-shadow: 0 10px 10px 5px rgba(47, 47, 55, 0.21);
    border: solid 1px #ffb803;
    background-color: #ffffff;
`;

const LoginFormContent = styled.form`
    min-height: 200px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px 0px 20px;
`;

const InputLabel = styled.label`
    height: 30px;
    font-family: "Nunito Sans", sans-serif;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.07;
    letter-spacing: normal;
    color: #000000;
`;

const FormInput = styled.input`
    min-width: 240px;
    height: 45px;
    opacity: 0.77;
    border-radius: 9px;
    border: solid 2px #a8b2ba;
    background-color: #ffffff;
    font-family: "Nunito Sans", sans-serif;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.37;
    letter-spacing: normal;
    color: #000000;
    padding-left: 10px;
`;

const SubmitButton = styled.input`
    margin-top: 20px;
    min-width: 200px;
    height: 45px;
    border-radius: 22px;
    border: solid 4px #ffb803;

    background: none;
    /* color: inherit; */
    /* border: none; */
    padding: 0;
    font-family: "Nunito Sans", sans-serif;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    outline: inherit;

    /* font-size: 35px; */
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #003a57;
    &:disabled {
        opacity: 0.3;
    }
`;

const ErrorInformation = styled.div`
    height: 20px;
    margin: 5px;

    font-family: "Nunito Sans", sans-serif;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    color: #003a57;
`;

const RegistrationButton = styled.button`
    border-radius: 44.5px;
    min-width: 200px;
    height: 45px;
    border: solid 2px #ffffff;
    font-family: "Nunito Sans", sans-serif;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #003a57;
    margin: 20px;
`;

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();
    const UserCTX = useContext(UserContext);

    useEffect(() => {
        if (login.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [login, password]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (login === "tester1" && password === "abc123") {
            setError(false);
            UserCTX.setLoggedIn({ userName: "TESTER 1", userRecipes: [] });
            history.push("/user");
        } else if (login === "dominika" && password === "domi123") {
            setError(false);
            UserCTX.setLoggedIn({ userName: "Dominika", userRecipes: [8] });
            history.push("/user");
        } else if (login === "sandrakn" && password === "sendi123") {
            setError(false);
            UserCTX.setLoggedIn({ userName: "Sandra", userRecipes: [9, 10] });
            history.push("/user");
        } else if (login === "martabk" && password === "dusia123") {
            setError(false);
            UserCTX.setLoggedIn({ userName: "Marta", userRecipes: [11] });
            history.push("/user");
        } else if (login === "patrycjaza" && password === "pati123") {
            setError(false);
            UserCTX.setLoggedIn({ userName: "Patrycja", userRecipes: [12] });
            history.push("/user");
        } else if (login === "aniapk" && password === "pytlix") {
            setError(false);
            UserCTX.setLoggedIn({ userName: "Ania", userRecipes: [13] });
            history.push("/user");
        } else if (login === "kasiasr" && password === "kasia123") {
            setError(false);
            UserCTX.setLoggedIn({ userName: "Kasia", userRecipes: [14, 15] });
            history.push("/user");
        } else if (login === "olana" && password === "olcia123") {
            setError(false);
            UserCTX.setLoggedIn({ userName: "Ola", userRecipes: [16, 17] });
            history.push("/user");
        } else {
            setError(true);
            setHelperText("Nieprawidłowy login lub hasło");
        }
    };

    return (
        <Body>
            <PageNav>
                <NavbarButton
                    path="/recipes"
                    label="Wróć do strony głównej"
                    icon={<BackArrow />}
                />
            </PageNav>
            <ImageZone>
                <MessImage />
            </ImageZone>
            <Main>
                <LoginFormContent onSubmit={handleLogin}>
                    <InputLabel htmlFor="login">Login</InputLabel>
                    <FormInput
                        type="text"
                        id="login"
                        name="login"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <InputLabel htmlFor="lname">Hasło</InputLabel>
                    <FormInput
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <SubmitButton
                        type="submit"
                        value="Zaloguj"
                        // className="login-form-main__submit"
                        disabled={isButtonDisabled}
                    />
                </LoginFormContent>
                <ErrorInformation>{helperText}</ErrorInformation>
            </Main>
            <RegistrationButton onClick={() => history.push("/registration")}>
                Załóż konto
            </RegistrationButton>
        </Body>
    );
};

export default LoginForm;
