import React from 'react';
import './Display.css';

const CalculatorDisplay = () => {

  return (
    <div className="Calculator-Display">
    <div>{Math.round(Math.random() * 10)}</div>
    </div>
  )
}

export default CalculatorDisplay