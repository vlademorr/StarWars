import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharactersList from "../charactersList/CharactersListContainer";
import CharacterDetails from "../characterDetails/CharacterDetailsContainer";
import UserInfo from "../userInfo/UserInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import FacebookLogin from "react-facebook-login";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
    const [userData, setUserData] = useState("{}");

    useEffect(() => {
        try {
            setUserData(JSON.parse(loggedIn || null));
        } catch (e) {
            console.log(e);
        }
    }, [loggedIn]);

    const onLoggedIn = (data) => {
        localStorage.setItem("loggedIn", JSON.stringify(data));
        setLoggedIn(JSON.stringify(data));
    };

    return (
        <Router>
            <div className="header">
                <Link to="/">
                    <h1 className="title">Star Wars</h1>
                </Link>
                {!loggedIn && (<FacebookLogin appId="829268310896559" fields="name,email,picture" callback={onLoggedIn}/>)}
            </div>
            {
                loggedIn && (
                    <>
                        <Switch>
                            <Route path="/" exact component={CharactersList}/>
                            <Route path="/character" component={CharacterDetails}/>
                        </Switch>
                        <UserInfo userData={userData}/>
                    </>
                )
            }
        </Router>
    );
};

export default App;