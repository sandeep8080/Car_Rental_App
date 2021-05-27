import './App.css';
import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Box } from '@material-ui/core'

import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

function App() {
  const [data, setData] = useState({
    sourceLocation: 'Mumbai/MH',
    destination: 'Delhi/DL',
    carType: 'HatchBack',
    travellers: 1
  });
  const [currentStep, setCurrentStep] = useState(2);

  const handleNextStepOne = (newData) => {
    console.log('App', newData);
    let dataCopy = { ...data };
    dataCopy = { ...dataCopy, ...newData };
    console.log(data, dataCopy);
    setData(dataCopy);
    setCurrentStep(2);
  };

  const steps = [
    <StepOne data={data} nextStep={handleNextStepOne} />,
    <StepTwo data={data} />
  ];

  return (
    <div className="App">
      <AppBar position="static" className="appbar" elevation={0}>
        <Toolbar className="toolbar">
          <img src="https://d1rgemtytdlz2g.cloudfront.net/Vahak_Blue.png" alt="Vahak" className='logo-img' />
        </Toolbar>
      </AppBar>
      <Box className='formHeader'>
        <h1> Place your Bid({currentStep}/4 step) </h1>
      </Box>
      <Container maxWidth="sm" className='form-container'>
        {steps[currentStep - 1]}
      </Container>
    </div>
  );
}

export default App;
