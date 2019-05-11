import React from 'react';
import './FirstRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FirstRow= () => {

  let clear = 'clear'
  return (
    <div className="First-Row">
      <div className="Clear">{clear}</div>
      <div className="Divide"><FontAwesomeIcon icon="divide" />
      </div>
    </div>
  )
}

export default FirstRow