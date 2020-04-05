import React from "react";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";

const NewRecipe = () => {
    return (
        <div>
            <NavbarButton
                path="/recipes"
                label="Wróć do strony głównej"
                icon={<BackArrow />}
            />
            <h3>Tutaj dodajemy nowy przepis</h3>
        </div>
    );
};

export default NewRecipe;
