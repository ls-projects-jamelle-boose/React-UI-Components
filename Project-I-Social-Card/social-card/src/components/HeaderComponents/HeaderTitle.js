import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="Header-Title">
      <h2 className="Lambda-School">Lambda School</h2>
      <h3 className="Lambda-SchoolDate">@LambdaSchool &middot; {moment().format('D MMM')}</h3>
    </div>
  )
  
}
const moment = require('moment')

export default HeaderTitle