import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";
import MessImage from "../../assets/MessImage/MessImage";

import "./LoginForm.css";

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
            // setHelperText("Zalogowano");
            UserCTX.setLoggedIn({ userName: "TESTER 1", userRecipes: [] });
            history.push("/user");
        } else if (login === "dominika" && password === "domi123") {
            setError(false);
            // setHelperText("Zalogowano");
            UserCTX.setLoggedIn({ userName: "Dominika", userRecipes: [8] });
            history.push("/user");
        } else {
            setError(true);
            setHelperText("Nieprawidłowy login lub hasło");
        }
    };

    return (
        <div className="login-form">
            <div className="login-form-navigation">
                <NavbarButton
                    path="/recipes"
                    label="Wróć do strony głównej"
                    icon={<BackArrow />}
                />
            </div>
            <div className="login-form-image">
                <MessImage />
            </div>
            <div className="login-form-main">
                <form
                    onSubmit={handleLogin}
                    className="login-form-main--content"
                >
                    <label htmlFor="login" className="login-form-main--label">
                        Login
                    </label>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        className="login-form-main__input"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <label htmlFor="lname" className="login-form-main--label">
                        Hasło
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="login-form-main__input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Zaloguj"
                        className="login-form-main__submit"
                        disabled={isButtonDisabled}
                    />
                </form>
                <div className="login-form-main__info">{helperText}</div>
            </div>
            <div className="login-form-registration">
                <button>Załóż konto</button>
            </div>
        </div>
    );
};

export default LoginForm;
