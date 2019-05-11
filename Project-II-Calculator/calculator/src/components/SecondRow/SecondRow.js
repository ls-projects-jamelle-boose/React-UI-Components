import React from 'react';
import './SecondRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SecondRow= () => {

  // let seven = 'seven'
  // let eight = 'eigtht'
  // let nine = 'nine'
      
  return (
    <div className="Second-Row">
      <div className="Seven">7</div>
      <div className="Eight">8</div>
      <div className="Nine">9</div>
      <div className="Multiply"><FontAwesomeIcon icon="multiply" /></div>
    </div>
  )
}

export default SecondRow