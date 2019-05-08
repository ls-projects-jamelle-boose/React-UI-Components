import React from 'react';
import HeaderContent from '../HeaderComponents/HeaderContent'
import HeaderTitle from './HeaderTitle';
import './Header.css';

const HeaderContainer = () => {
  return (
    <div className="Header-Container">
    <HeaderContent />
    <HeaderTitle />
    </div>
  )
  
}

export default HeaderContainer