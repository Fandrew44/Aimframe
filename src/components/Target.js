import React, { useState } from 'react';
import '../Target.css';


const Target = ({ target, wait, score, setScore }) => {
    const distFromTop = target.y;
    const distFromLeft = target.x;
    const radius = target.r;

    //STATES
    const [isHit, setIsHit] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    //The targets are NOT quite entirely non-overlapping but it's close enough for now...
    const styles = {
        visibility: isHidden ? "hidden" : "visible",
        top: `${distFromTop}px`,
        left: `${distFromLeft}px`,
        width: `${1.25 * radius}px`,
        height: `${1.25 * radius}px`,
        padding: `${0.125 * radius}px`,
        "animation-delay": `${wait}ms`,
    }

    const hitTarget = () => {
        if (!isHit) {
            setIsHit(true);
            setScore(score + 1);
        }
    }

    const showTarget = () => {
        setTimeout(() => {
            setIsHidden(false);
        }, wait);
    }

    showTarget();

    return(
        <div onClick= { hitTarget } className="target" style={styles}></div>
    );
}


//IMPORTANT NOTE: I NEVER figured out how to add units (i.e. px) to Prop Values with react-styled-components :(
// - But inline-styling the css seems to work as template literals seem to work thus allowing me to append "px" after the prop value


export default Target;