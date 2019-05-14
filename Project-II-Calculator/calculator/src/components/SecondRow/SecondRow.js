import React from 'react';
import './SecondRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberButton from '../ButtonComponents/NumberButton'

const SecondRow= () => {

  return (
    <div className="Second-Row">
      <NumberButton buttonStyle="Seven" text="7" />
      <NumberButton buttonStyle="Eight" text="8" />
      <NumberButton buttonStyle="Nine" text="9" />
      <NumberButton buttonStyle="Times" text={<FontAwesomeIcon icon="times"/>} />
    </div>
  )
}

export default SecondRow