import React from 'react';
import './Button.css';

const ActionButton = props => {

  return (
    <div className={`${props.buttonStyle} button`}>{props.text}</div>
  )
}




export default ActionButton