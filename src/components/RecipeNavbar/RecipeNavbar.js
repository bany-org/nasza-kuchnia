import React from "react";

import NavbarButton from "../NavbarButton/NavbarButton";
import BackArrow from "../../assets/BackArrow/BackArrow";
import PrintIcon from "../../assets/PrintIcon/PrintIcon";
import TrashIcon from "../../assets/TrashIcon/TrashIcon";
import PencilIcon from "../../assets/PencilIcon/PencilIcon";

import "./RecipeNavbar.css";

const RecipeNavbar = () => {
    return (
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
    );
};

export default RecipeNavbar;
