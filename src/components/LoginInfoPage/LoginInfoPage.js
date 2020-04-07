import React from "react";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";

const LoginInfoPage = () => {
    return (
        <div>
            <NavbarButton
                path="/recipes"
                label="Wróć do strony głównej"
                icon={<BackArrow />}
            />
            <h3>Dodawanie przepisu jeszcze nie jest dostępne</h3>
        </div>
    );
};

export default LoginInfoPage;
