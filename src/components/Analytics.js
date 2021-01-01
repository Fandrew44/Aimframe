import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import '../Analytics.css';


const Analytics = props => {

    const pushToRoute = route => {
        props.history.push(route);
    }
    return(
        <div>
            <header>
            <BrowserRouter>
                    <Switch>
                        <button className="menu-back start-button" onClick={() => { pushToRoute('/') }}>
                            Menu
                        </button>
                    </Switch>
                </BrowserRouter>
            </header>
            <div className="container">
                <h2>Under Development...</h2>
                <h5>beep boop</h5>
            </div>
        </div>
    );
}

export default Analytics;