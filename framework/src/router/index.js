import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from '../components/navigation';

const RouterApp = () => {

    return (
        <Router>
            <>
                <Navigation />
                <Switch>
                    <Route exact path="/" redirect="/home">
                        <h4>Hpme</h4>
                    </Route>
                    <Route path="*">
                        <h4>Notfound</h4>
                    </Route>
                </Switch>
            </>
        </Router>
    );
}

export default RouterApp;