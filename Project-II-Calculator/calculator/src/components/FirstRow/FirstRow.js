import React from 'react';
import './FirstRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton';

const FirstRow= () => {

  return (
    <div className="Fifth-Row">
      <ActionButton buttonStyle="Clear" text={`clear`} />
      <NumberButton buttonStyle="Divide" text={<FontAwesomeIcon icon="divide"/>} />
    </div>
  )
}

export default FirstRow