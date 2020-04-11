import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const NavButton = styled.button`
    min-width: 37px;
    height: 37px;
    border-radius: 30px;
    background-color: #003a57;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    ${(props) =>
        props.color === "gray" &&
        css`
            background-color: #f6f1e9;
        `}
`;

const NavbarLink = styled(NavLink)`
    text-decoration: none;
`;

const Label = styled.div`
    font-family: "Nunito Sans", sans-serif;
    font-size: 13px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    text-decoration: none;
    margin: 5px;
`;

const NavbarButton = (props) => {
    return (
        <NavbarLink exact={props.exact || false} to={props.path || ""}>
            <NavButton color={props.color} disabled={props.disabled}>
                {props.icon && <div>{props.icon}</div>}
                {props.label && <Label>{props.label}</Label>}
            </NavButton>
        </NavbarLink>
    );
};

export default NavbarButton;
