import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className="calc-display" key={props.mathCalcNumber}>{props.mathCalcNumber}</div>
    )
};

export default CalculatorDisplay;