import React, { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";

const UserPage = () => {
    const UserCTX = useContext(UserContext);

    return (
        <div>
            <NavbarButton
                path="/recipes"
                label="Wróć do strony głównej"
                icon={<BackArrow />}
            />
            <h2>Witaj: {UserCTX.userName}</h2>
            <h3>Jakieś info o użytkowniku - imię itp</h3>
            <p>moje przepisy</p>
            <ul>
                {UserCTX?.userRecipes.map((elem) => {
                    return <li key={elem}>{elem}</li>;
                })}
            </ul>
            <p>
                później może info o ilości przepisów które dodaliśmy, może
                jakieś linki do tych przepisów. Tochyba akurat spoko żeby sobie
                coś ugotować ze SWOICH przepisów
            </p>
            <button type="button" onClick={UserCTX.logoutUser}>
                Wyloguj
            </button>
        </div>
    );
};

export default UserPage;
