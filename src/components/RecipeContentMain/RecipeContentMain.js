import React, { useState } from "react";
import styled, { css } from "styled-components";

const Body = styled.div`
    min-height: 100%;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 10px 10px 5px rgba(47, 47, 55, 0.21);
    border: solid 1px #ffb803;
    background-color: #dde2e5;
    color: #000000;
`;

const RecipeContentButton = styled.button`
    width: 50%;
    height: 30px;
    border: solid 1px #ffb803;
    background-color: #ffffff;
    font-family: "Playfair Display", serif;
    font-size: 15px;
    font-weight: bold;
    @media (min-width: 800px) {
        display: none;
    }
`;

const Info = styled.div`
    padding: 11px;
    opacity: 0.87;
    font-family: "Nunito Sans", sans-serif;
    font-size: 11px;
    line-height: 1.11;
`;

const RecipeContentList = styled.div`
    text-align: left;
    list-style: none;
    padding: unset;
    margin: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    ${(props) =>
        props.hidden &&
        css`
            @media (max-width: 800px) {
                display: none;
            }
        `}

    @media (min-width: 800px) {
        width: 40%;
    }
`;

const PreparationList = styled.div`
    text-align: left;
    list-style: none;
    padding: unset;
    margin: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    ${(props) =>
        props.hidden &&
        css`
            @media (max-width: 800px) {
                display: none;
            }
        `}
    @media (min-width: 800px) {
        background-color: white;
    }
`;

const ListItem = styled.li`
    margin: 10px;
    padding-left: 10px;
    width: 90%;
    min-height: 35px;
    opacity: 0.77;
    border-radius: 9px;
    background-color: #ffffff;
    font-family: "Nunito Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 3.32;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) =>
        props.clicked &&
        css`
            opacity: 0.5;
            text-decoration: line-through;
        `}
    @media (min-width: 800px) {
        margin: 3px 10px;
    }
`;

const PreparationListItem = styled.li`
    margin: 10px;
    padding-left: 10px;
    width: 90%;
    min-height: 35px;
    opacity: 0.77;
    border-radius: 9px;
    background-color: #ffffff;
    font-family: Nunito Sans, sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 3.32;
    padding-top: 8px;
    ${(props) =>
        props.clicked &&
        css`
            opacity: 0.5;
            > div {
                display: none;
            }
        `}
    @media (min-width: 800px) {
        border-bottom: 1px solid gray;
    }
`;

const CheckMark = styled.div`
    width: 20px;
    height: 8px;
    transform: rotate(-45deg);
    border-left: solid 3px #000000;
    border-bottom: solid 3px #000000;
`;

const PreparationItemHeader = styled.span`
    font-family: "Playfair Display", serif;
    font-size: 17px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
`;

const PreparationItemContent = styled.div`
    font-family: "Nunito Sans", sans-serif;
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    padding-top: 8px;
    padding-bottom: 8px;
`;

const RecipeMain = styled.div`
    display: flex;
`;

const RecipeContentMain = ({ data }) => {
    const [ingredientsTab, changeTab] = useState(true);
    const [clickedIngredients, updateArray] = useState([]);
    const [clickedPreparationSteps, updateClickedPreparationSteps] = useState(
        []
    );

    const changetoTrue = () => changeTab(true);
    const changeTofalse = () => changeTab(false);

    const toggleClickedIngredients = (e) => {
        const name = e.target?.attributes.name?.value;
        const index = clickedIngredients.indexOf(name);
        const arraytoUpdate = [...clickedIngredients];

        if (index === -1) {
            updateArray([...arraytoUpdate, name]);
        } else {
            arraytoUpdate.splice(index, 1);
            updateArray(arraytoUpdate);
        }
    };

    const toggleClickedPreparationSteps = (e) => {
        let name = e.target?.attributes.name?.value;

        if (name === "child") {
            name = e.target.parentElement.attributes.name?.value;
        }

        const arrayToUpdate = [...clickedPreparationSteps];
        const index = arrayToUpdate.indexOf(name);

        if (index === -1) {
            updateClickedPreparationSteps([...arrayToUpdate, name]);
        } else {
            arrayToUpdate.splice(index, 1);
            updateClickedPreparationSteps(arrayToUpdate);
        }
    };

    const stop = (e) => {
        e.stopPropagation();
        return;
    };

    return (
        <Body>
            <RecipeContentButton onClick={changetoTrue}>
                Składniki
            </RecipeContentButton>
            <RecipeContentButton onClick={changeTofalse}>
                Przepis
            </RecipeContentButton>
            <Info>
                Dotknij składnik, który chcesz wykreśilić bo już go masz
            </Info>
            <RecipeMain>
                <RecipeContentList hidden={!ingredientsTab}>
                    {data.ingredients.map((elem, i) => {
                        const clicked =
                            clickedIngredients.indexOf(elem.name) !== -1;
                        return (
                            <ListItem
                                name={elem.name}
                                key={i}
                                onClick={(e) => toggleClickedIngredients(e)}
                                clicked={clicked}
                            >
                                {`${elem.name}`}
                                {clicked && <CheckMark onClick={stop} />}
                            </ListItem>
                        );
                    })}
                </RecipeContentList>

                <PreparationList hidden={ingredientsTab}>
                    {Object.keys(data.preparation).map((elem) => {
                        return (
                            <PreparationListItem
                                key={elem}
                                name={elem}
                                onClick={(e) =>
                                    toggleClickedPreparationSteps(e)
                                }
                                clicked={
                                    clickedPreparationSteps.indexOf(elem) !== -1
                                }
                            >
                                <PreparationItemHeader name="child">
                                    Krok {elem}
                                </PreparationItemHeader>
                                <PreparationItemContent name="child">
                                    {data.preparation[elem]}
                                </PreparationItemContent>
                            </PreparationListItem>
                        );
                    })}
                </PreparationList>
            </RecipeMain>
        </Body>
    );
};

export default RecipeContentMain;
