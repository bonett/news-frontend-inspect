import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationComponent from '../components/navigation';

import HomeContainer from '../containers/home-container';
import NotFoundContainer from '../containers/not-found-container';

const RouterApp = () => {

    return (
        <Router>
            <>
                <header>
                    <NavigationComponent />
                </header>
                <Switch>
                    <Route exact path="/" redirect="/home">
                        <HomeContainer />
                    </Route>
                    <Route path="*">
                        <NotFoundContainer />
                    </Route>
                </Switch>
            </>
        </Router>
    );
}

export default RouterApp;