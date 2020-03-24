import React from "react";
import { HashRouter, NavLink, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <HashRouter basename="/">
            <div className="App">
                <h1>h1</h1>
                <NavLink
                    exact
                    to="przepis-1"
                    className="nav-item"
                    // activeClassName="selected"
                    // key={elem.name}
                >
                    Przepis 1
                </NavLink>
                <NavLink
                    exact
                    to="przepis-2"
                    className="nav-item"
                    // activeClassName="selected"
                    // key={elem.name}
                >
                    Przepis 2
                </NavLink>
                <p>p1</p>
                <Switch>
                    <Route exact path="/">
                        <div>home?</div>
                    </Route>
                    <Route exact path="/przepis-1">
                        <div>przepis 1</div>
                    </Route>
                    <Route exact path="/przepis-2">
                        <div>przepis 2</div>
                    </Route>
                    <Redirect to="/"></Redirect>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
