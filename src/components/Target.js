import React from 'react';
import '../Target.css';
import style from 'styled-components';


// const Target = ({ target }) => {
//     const top = target.y;
//     const left = target.x;

//     return(
//         <div className="target" style={
//             {top: {top},
//              left: {left}
//             }}></div>
//     );
// }

//styled-components (in this case) allows for PROPS to directly dictate the styling (i.e. position) of the React Components
const Target = style.div`
    position: absolute;
    bottom: ${props => props.target.y};
    right: ${props => props.target.x};
    width: 2rem;
    height: 2rem;
    background: black;
    /* -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px; */
  
    color: black;
    border-radius: 50%;
    background-color: #c00;
    background-clip: content-box;
    padding: 0.25rem;
    border: solid 0.5rem #c00;
    /* background: repeating-radial-gradient(red, red 10%, white 10%, white 20%); */
    transition: border-color 200ms ease-in, background-color 200ms ease-in;
    animation-name: zoomInOut;
    animation-duration: 5s;
    animation-fill-mode: both;
    
    &:hover {
        border: solid 0.5rem rgb(243, 136, 136);
    }


`;


export default Target;