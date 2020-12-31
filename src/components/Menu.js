import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../Menu.css';

const Menu = props => {
    //STATES
    // - determines whether menu drop down is displayed or not
    const [openMenu, setOpenMenu] = useState(false);

    const difficulty = props.location.difficulty;

    //Assigns classes to components when Menu button is clicked
    //Triggers dropdown animation
    //(I THINK????)
    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) classArr.push(`open-${num}`);
        return classArr.join(' ');
    }

    //Used to pass the Path of a specific Route 
    //Oh is this Dynamic Routing???? 
    // const pushToRoute = ({ route, difficulty, setDifficulty }) => {
    //     props.history.push({
    //         pathname: route,
    //         state: { difficulty, setDifficulty },
    //     });

    const pushToPlay = () => {
        props.history.push({
            pathname: '/play',
            difficulty: difficulty,
        });

        setOpenMenu(false);
    }

    const pushToAnalytics = () => {
        props.history.push({
            pathname: '/analytics',
        });
        
        setOpenMenu(false);
    }

    const pushToDifficulty = () => {
        props.history.push({
            pathname: '/difficulty',
        })

        setOpenMenu(false);
    }


    return(
        <div>
            <header>
              <h1>Welcome to Aim Trainer!</h1>
            </header>
 
            <div className="Menu">
                <div className={"m-item m-logo"}
                    onClick={() => setOpenMenu(!openMenu)}>
                    Menu
                </div>
                <div className={setClassNames(1)}
                    onClick={() => pushToPlay()}>
                    Play
                </div>
                <div className={setClassNames(2)}
                    onClick={() => pushToAnalytics()}>
                    Analytics
                </div>
                <div className={setClassNames(3)}
                    onClick={() => pushToDifficulty()}>
                    Difficulty
                </div>
            </div>
            <footer>
                <h3>Made with luv by Andrew Han c:</h3>
            </footer>
        </div>
    );
}

export default withRouter(Menu);

