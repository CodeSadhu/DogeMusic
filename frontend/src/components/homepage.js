import React, { Component } from 'react';
import JoinRoomPage from "./roomjoinpage";
import CreateRoomPage from "./createroompage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <p>Homepage</p>
                    </Route>
                    <Route exact path='/join' component={JoinRoomPage} />
                    <Route exact path='/create' component={CreateRoomPage} />
                </Switch>
            </Router>
        )
    }
}