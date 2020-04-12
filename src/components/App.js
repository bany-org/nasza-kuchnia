import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import styled from "styled-components";

import Recipe from "./Recipe/Recipe";
import RecipesList from "./RecipesList/RecipesList";
import LoginForm from "./LoginForm/LoginForm";
import LoginInfoPage from "./LoginInfoPage/LoginInfoPage";
import UserPage from "./UserPage/UserPage";
import NewRecipe from "./NewRecipe/NewRecipe";
import RemoveRecipePage from "./RemoveRecipePage/RemoveRecipePage";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import EditRecipe from "./EditRecipe/EditRecipe";

const Body = styled.div`
    margin: 0;
    min-height: 100vh;
    background-color: #f6f1e9;
`;

function App() {
    return (
        <HashRouter basename="/">
            <Body>
                <Switch>
                    <Route exact path="/">
                        <RecipesList />
                        {/* HOME?  */}
                    </Route>
                    <Route exact path="/login">
                        <LoginForm />
                    </Route>
                    <Route exact path="/login/info">
                        <LoginInfoPage />
                    </Route>
                    <Route exact path="/registration">
                        <RegistrationForm />
                    </Route>
                    <Route exact path="/user">
                        <UserPage />
                    </Route>
                    <Route exact path="/recipes">
                        <RecipesList />
                    </Route>
                    <Route exact path="/recipe/:id">
                        <Recipe />
                    </Route>
                    <Route exact path="/new/recipe">
                        <NewRecipe />
                    </Route>
                    <Route exact path="/remove/recipe/:id">
                        <RemoveRecipePage />
                    </Route>
                    <Route exact path="/edit/recipe/:id">
                        <EditRecipe />
                    </Route>
                    <Redirect to="/recipes"></Redirect>
                </Switch>
            </Body>
        </HashRouter>
    );
}

export default App;
