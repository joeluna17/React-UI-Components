import React from 'react';
import './Button.css';



const ActionButton = props =>{
    return(
        <button className={props.buttonStyles}>{props.textLabel}</button>
    )
}

ActionButton.defaultProps = {
    buttonStyles: 'basicArith-button'
}

export default ActionButton;