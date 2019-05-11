import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import FirstRow from './components/FirstRow/FirstRow';
import SecondRow from './components/SecondRow/SecondRow';

const App = () => {
  return (
    <div className="App">
    <CalculatorDisplay />
    <FirstRow />
    <SecondRow />
    </div>
  );
};

export default App;
