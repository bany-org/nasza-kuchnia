import React from "react";
import { HashRouter, NavLink, Route, Switch, Redirect } from "react-router-dom";

import Recipe from "./Recipe/Recipe";
import RecipesList from "./RecipesList/RecipesList";

import "./App.css";

function App() {
    return (
        <HashRouter basename="/">
            <div className="App">
                {/* <NavLink
                    exact
                    to="/recipes"
                    className="nav-item"
                    // activeClassName="selected"
                    // key={elem.name}
                >
                    Wszystkie
                </NavLink>
                <NavLink
                    exact
                    to="/recipe/1"
                    className="nav-item"
                    // activeClassName="selected"
                    // key={elem.name}
                >
                    Przepis 1
                </NavLink>
                <NavLink
                    exact
                    to="/recipe/12"
                    className="nav-item"
                    // activeClassName="selected"
                    // key={elem.name}
                >
                    Przepis 12
                </NavLink>
                <p>p1</p> */}
                <Switch>
                    <Route exact path="/">
                        <div>home?</div>
                    </Route>
                    <Route exact path="/recipes">
                        <RecipesList />
                    </Route>
                    <Route exact path="/recipe/:id">
                        <Recipe />
                    </Route>
                    <Redirect to="/"></Redirect>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
