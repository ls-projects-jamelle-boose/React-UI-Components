import React from 'react';
import './FifthRow.css';
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FifthRow = () => {

  return (
    <div className="Fifth-Row">
      <ActionButton buttonStyle="Zero" text="0" />
      <NumberButton buttonStyle="Equals" text={<FontAwesomeIcon icon="equals"/>} />
    </div>
  )
}

export default FifthRow