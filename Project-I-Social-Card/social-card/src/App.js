import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import './App.css';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;

