import React from 'react';
import HeaderContent from '../HeaderComponents/HeaderContent'
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

const HeaderContainer = () => {
  return (
    <div className="Header-Container">
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  )
  
}

export default HeaderContainer