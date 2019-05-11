import React from 'react';
import './Display.css';


const CALCULATOR_DISPLAY = () => {

  return (
    <div className="Calculator-Display">
    <div>{Math.round(Math.random() *10)}</div>
    
    
    
    </div>
  )
}

export default CALCULATOR_DISPLAY