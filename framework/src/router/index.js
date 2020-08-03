import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationComponent from '../components/common/navigation';
import HomeContainer from '../containers/home-container';

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
                </Switch>
            </>
        </Router>
    );
};

export default RouterApp;
