import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Recipe from "./Recipe/Recipe";
import RecipesList from "./RecipesList/RecipesList";
import LoginForm from "./LoginForm/LoginForm";

import "./App.css";

function App() {
    return (
        <HashRouter basename="/">
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <RecipesList />
                        {/* HOME?  */}
                    </Route>
                    <Route exact path="/login">
                        <LoginForm />
                    </Route>
                    <Route exact path="/recipes">
                        <RecipesList />
                    </Route>
                    <Route exact path="/recipe/:id">
                        <Recipe />
                    </Route>
                    <Redirect to="/recipes"></Redirect>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
