import React from 'react';
import './FourthRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberButton from '../ButtonComponents/NumberButton'

const FourthRow = () => {

  return (
    <div className="Fourth-Row">
      <NumberButton buttonStyle="One" text="1" />
      <NumberButton buttonStyle="Two" text="2" />
      <NumberButton buttonStyle="Three" text="3" />
      <NumberButton buttonStyle="Plus" text={<FontAwesomeIcon icon="plus"/>} />
    </div>
  )
}

export default FourthRow