import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className= {`defaultButtonStyle ${props.buttonStyles}`}>{props.numberList}</button>
    )
};

export default NumberButton; 