import React, { useState } from 'react';
import '../Target.css';


const Target = ({ target, wait, score, setScore }) => {
    const distFromTop = target.y;
    const distFromLeft = target.x;
    const radius = target.r;

    //STATES
    const [isHit, setIsHit] = useState(false);

    //The targets are NOT quite entirely non-overlapping but it's close enough for now...
    const styles = {
        top: `${distFromTop}px`,
        left: `${distFromLeft}px`,
        width: `${1.25 * radius}px`,
        height: `${1.25 * radius}px`,
        padding: `${0.125 * radius}px`,
    }

    const hitTarget = () => {
        setIsHit(true);
        setScore(score + 1);
    }

    return(
        <div onClick= { hitTarget } className="target" style={styles}></div>
    );
}


//IMPORTANT NOTE: I NEVER figured out how to add units (i.e. px) to Prop Values with react-styled-components :(
// - But inline-styling the css seems to work as template literals seem to work thus allowing me to append "px" after the prop value


export default Target;