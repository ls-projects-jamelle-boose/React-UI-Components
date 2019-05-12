import React from 'react';
import './ThirdRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberButton from '../ButtonComponents/NumberButton'

const ThirdRow = () => {

  return (
    <div className="Third-Row">
      <NumberButton buttonStyle="Four" text="4" />
      <NumberButton buttonStyle="Five" text="5" />
      <NumberButton buttonStyle="Six" text="6" />
      <NumberButton buttonStyle="Minus" text={<FontAwesomeIcon icon="minus"/>} />
    </div>
  )
}

export default ThirdRow