import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../Menu.css';

const Menu = props => {
    //STATES
    const [openMenu, setOpenMenu] = useState(false);
    // - determines whether menu drop down is displayed or not

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
    const pushToRoute = route => {
        props.history.push(route);
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
                    onClick={() => pushToRoute("/play")}>
                    Play
                </div>
                <div className={setClassNames(2)}
                    onClick={() => pushToRoute("/analytics")}>
                    Analytics
                </div>
                <div className={setClassNames(3)}
                    onClick={() => pushToRoute("/settings")}>
                    Settings
                </div>
            </div>
            <footer>
                <h3>Made with luv by Andrew Han :)</h3>
            </footer>
        </div>
    );
}

export default withRouter(Menu);

