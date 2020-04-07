import React from "react";
import { useParams } from "react-router-dom";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";

const EditRecipe = () => {
    const { id } = useParams();

    return (
        <div>
            <NavbarButton
                path={`/recipe/${id}`}
                label="Wróć"
                icon={<BackArrow />}
            />
            <h3>Edycja przepisu</h3>
            <p>już jestem zmęczony - jutro dalej</p>
        </div>
    );
};

export default EditRecipe;
