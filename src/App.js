import './App.css';
import React, { useState } from 'react';
import StepOne from './components/StepOne';

function App() {
  const [data, setData] = useState({
    sourceLocation: 'ABC',
    destination: '',
    carType: '',
    travellers: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <StepOne data={data}
    />
  ]
  return (
    <div className="App">
      <p>header with icon</p>
      <p>For toolbar showing steps  {currentStep + 1} / 4</p>
      {steps[currentStep]}
    </div>
  );
}

export default App;
