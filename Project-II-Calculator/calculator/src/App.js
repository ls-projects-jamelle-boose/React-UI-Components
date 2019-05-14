import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import FirstRow from './components/FirstRow/FirstRow';
import SecondRow from './components/SecondRow/SecondRow';
import ThirdRow from './components/ThirdRow/ThirdRow';
import FourthRow from './components/FourthRow/FourthRow';
import FifthRow from './components/FifthRow/FifthRow';

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay />
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <FourthRow />
      <FifthRow />
    </div>
  );
};

export default App;
