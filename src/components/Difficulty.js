import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import '../Difficulty.css';

const Difficulty = props => {

    //Difficulty:
    // 0 - Easy
    // 1 - Medium
    // 2 - Hard
    // 3 - Gamer
    const [difficulty, setDifficulty] = useState(1);

    // const pushToRoute = route => {
    //     props.history.push(route);
    // }

    const pushToMenu = () => {
        props.history.push({
            pathname: '/',
            difficulty: difficulty,
        });
    }

    const setEasy = () => {
        setDifficulty(0)

    }

    const setMedium = () => {
        setDifficulty(1)
    }

    const setHard = () => {
        setDifficulty(2)
    }

    const setGamer = () => {
        setDifficulty(3)

    }

    return(
        <div>
            <header>
                <BrowserRouter>
                    <Switch>
                        <button className="menu-back start-button" onClick={() => pushToMenu()}>
                            Menu
                        </button> 
                    </Switch>
                </BrowserRouter>
            </header>
            <div className="difficulty-screen">
                <div onClick={ setEasy } className="button" id="button-5">
                    <div id="translate"></div>
                    <a href="#">Easy</a>
                </div>
                <div onClick={ setMedium } className="button" id="button-5">
                    <div id="translate"></div>
                    <a href="#">Medium</a>
                </div>
                <div onClick={ setHard } className="button" id="button-5">
                    <div id="translate"></div>
                    <a href="#">Hard</a>
                </div>
                <div onClick={ setGamer } className="hidden">
                    <div className="button gamer" id="button-5">
                        <div id="translate"></div>
                        <a href="#">Gamer</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Difficulty;


