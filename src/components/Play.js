import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Target from './Target';
import '../Play.css';

const Play = props => {

    //STATES
    const [inGame, setInGame] = useState(false);
    const [targets, setTargets] = useState([]);
    const [score, setScore] = useState(0);

    const difficulty = props.location.difficulty;
    

    //Dynamic Routing
    // - Functionality for changing routes (I THINK????)
    // - Damn this is kind of cool
    const pushToRoute = route => {
        props.history.push(route);
    }


    //Wait no this algorithm is pretty fast actually it just DOES NOT WORK ( b r u h )
    // - allTargets working CORRECTLY
    // - setTargets DOES NOT seem to be MODIFYING the 'targets' state <= PROBLEM
    // - ...targets DOES WORK ?
    // - Is it the WHILE LOOP that's breaking it?
    //IMPORTANT NOTE: Manipulating States in React is ASYNCHRONOUS
    const startGame = () => {
        //NOTE: Since modifying states in React is ASYNC, I can just first create the Array with all the appropriate Targets and then
        //simply set the 'targets' state to that Array
        // - Rather than updating the 'targets' state with each individual target generated
        setInGame(true);
        let allTargets = [];
        let displayTargets = [];
        let counter = 0;
        while (displayTargets.length < 44) {
            console.log(`# of targets is: ${targets.length}`);
            // console.log("Beep boop generating targets.");
            let overlapping = false;
            const xMin = 25;
            const xMax = 1400
            const yMin = 25;
            const yMax = 600;
            const target = {
                x: Math.floor(Math.random() * (xMax - xMin + 1)) + xMin,
                y: Math.floor(Math.random() * (yMax - yMin + 1)) + yMin,
                isHidden: true,
                r: 16,
                id: counter,
            };

            for (let i = 0; i < allTargets.length; i++) {
                let other = allTargets[i];
                let xDiff = target.x - other.x;
                let yDiff = target.y - other.y;
                let dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
                if (dist < 2) {
                    overlapping = true;
                    break;
                }
            }
            allTargets.push(target);

            //IMPORTANT NOTE: Remember that 'targets' is a STATE
            // - It MUST be modified using the SPECIFIED FUNCTION returned from useState()
            if (!overlapping) { 
                // console.log("Adding target to State");
                // console.log(target.id);
                displayTargets.push(target);
                counter++;
            }
        }

        setTargets(displayTargets);
    }

    const endGame = () => {
        setInGame(false);
    }
    
    return (
        <div>
            <header>
                <button className="start-button" onClick={ startGame }>Start</button>
                <h2>Score: { score } | Accuracy: { Math.round(score/44 * 100)}% </h2>
                <BrowserRouter>
                    <Switch>
                        <button className="menu-back start-button" onClick={() => { pushToRoute('/') }}>
                            Menu
                        </button>
                    </Switch>
                </BrowserRouter>
            </header>
            <div className="game-screen">
            <h4><span>Return to Menu</span> to play again</h4>
            {targets.map((target, i) => {
                switch (difficulty) {
                    case 0: //Easy
                     return <Target target={target} wait={i * 1250} score={ score } setScore={ setScore }/>
                    case 1: //Medium
                     return <Target target={target} wait={i * 900} score={ score } setScore={ setScore }/>                
                    case 2: //Hard
                     return <Target target={target} wait={i * 650} score={ score } setScore={ setScore }/>
                    case 3: //Gamer
                     return <Target target={target} wait={i * 300} score={ score } setScore={ setScore }/>
                    default: //Medium is DEFAULT difficulty
                     return <Target target={target} wait={i * 900} score={ score } setScore={ setScore }/>
                }
            })}
            </div>
        </div>
    )
}

export default Play;