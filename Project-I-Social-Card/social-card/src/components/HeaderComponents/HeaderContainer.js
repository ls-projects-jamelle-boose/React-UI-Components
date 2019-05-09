import React from 'react';
import HeaderContent from '../HeaderComponents/HeaderContent'
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

const HeaderContainer = () => {
  return (
    <div className="Header-Container">
      <ImageThumbnail />
      <div className="Header-TContent">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
  
}

export default HeaderContainer