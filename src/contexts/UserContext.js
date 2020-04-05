import React, { createContext, Component } from "react";

export const UserContext = createContext();

class UserContextProvider extends Component {
    state = {
        userName: null,
        loggedIn: false,
        userRecipes: [],
    };

    setLoggedIn = (data) => {
        this.setState({
            loggedIn: true,
            userName: data?.userName,
            userRecipes: data.userRecipes,
        });
    };

    logoutUser = () => {
        this.setState({
            loggedIn: false,
            userName: null,
            userRecipes: [],
        });
    };

    render() {
        return (
            <UserContext.Provider
                value={{
                    ...this.state,
                    setLoggedIn: this.setLoggedIn,
                    logoutUser: this.logoutUser,
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;
