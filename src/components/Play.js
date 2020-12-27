import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Target from './Target';
import '../Play.css';

const Play = props => {

    //STATES
    const [inGame, setInGame] = useState(false);
    const [targets, setTargets] = useState([]);

    //Dynamic Routing
    // - Functionality for changing routes (I THINK????)
    // - Damn this is kind of cool
    const pushToRoute = route => {
        props.history.push(route);
    }
    

    //This takes WAY TOOOOOOO LONG 
    //Need a BETTER ALGORITHM to generate NON-OVERLAPPING CIRCLES
    const startGame = () => {
        setInGame(true);
        let allTargets = [];
        while (targets.length < 44) {
            console.log("Beep boop generating targets.");
            let overlapping = false;
            let xMin = 25;
            let xMax = 795
            let yMin = 25;
            let yMax = 700;
            let target = {
                x: Math.floor(Math.random() * (xMax - xMin + 1)) + xMin,
                y: Math.floor(Math.random() * (yMax - yMin + 1)) + yMin,
                r: 1,
            };
            allTargets.push(target);
            for (let i = 0; i < allTargets.length; i++) {
                let other = allTargets[i];
                let xDiff = target.x - other.x;
                let yDiff = target.y - other.y;
                let dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
                if (dist < (target.r + other.r)) {
                    overlapping = true;
                    break;
                }
            }

            if (!overlapping) {
                targets.push(target);
            }
        }
    
    }

    const endGame = () => {
        setInGame(false);
    }
 
    
    return(
        <div>
            <header>
                <button className="start-button" onClick={ startGame }>Start</button>
                <BrowserRouter>
                    <Switch>
                        <button className="menu-back start-button" onClick={() => {pushToRoute('/')}}>
                            Menu
                        </button>
                    </Switch>
                </BrowserRouter>
            </header>
            <div className="game-screen">
                {targets.map(target => (
                    <Target target={ target } />
                ))}
            </div>
        </div>
    )
}

export default Play;