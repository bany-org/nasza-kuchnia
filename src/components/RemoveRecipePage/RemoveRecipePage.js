import React from "react";
import { useParams } from "react-router-dom";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";

const RemoveRecipePage = () => {
    const { id } = useParams();

    console.log("w remowie id", id);

    return (
        <div>
            <NavbarButton
                path={`/recipe/${id}`}
                label="Wróć"
                icon={<BackArrow />}
            />
            <h3>Usuwanie przepisu</h3>
            <p>
                Ta czynność nie może zostać cofnięta, jakieś przyciski, może
                dodam jakieś proste zadanie żeby potwierdzić
            </p>
        </div>
    );
};

export default RemoveRecipePage;
