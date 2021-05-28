import './App.css';
import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Box } from '@material-ui/core'

import StepOne from './components/formSteps/StepOne';
import StepTwo from './components/formSteps/StepTwo';
import StepThree from './components/formSteps/StepThree';
import StepFour from './components/formSteps/StepFour';

function App() {
  const [data, setData] = useState({
    sourceLocation: '',
    destination: '',
    carType: '',
    travellers: 1,
    bidPrice: 0,
    bidChecked: false,
    mNumber: '',
    name: '',
    remark: ''

  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStepOne = (newData) => {
    let dataCopy = { ...data };
    dataCopy = { ...dataCopy, ...newData };
    setData(dataCopy);
    setCurrentStep(2);
  };

  const handleEdit = () => {
    setCurrentStep(1);
  };

  const handleEditMNumber = () => {
    setCurrentStep(2);
  };

  const handleBid = (newBid) => {
    let dataCopy = { ...data };
    dataCopy = { ...dataCopy, ...newBid };
    setData(dataCopy);
  }

  const handleSendOtp = (newData) => {
    let dataCopy = { ...data };
    dataCopy = { ...dataCopy, ...newData };
    setData(dataCopy);
    setCurrentStep(3);
  };

  const moveToCheckOut = (otp) => {
    console.log(otp);
    if (otp.join('') === '1234') {
      setCurrentStep(4);
    } else {
      console.log('Invalid OTP');
    }
  };

  const steps = [
    <StepOne data={data} nextStep={handleNextStepOne} />,
    <StepTwo data={data} handleEdit={handleEdit} handleSendOtp={handleSendOtp} handleBid={handleBid} />,
    <StepThree data={data} handleEdit={handleEdit} handleEditMNumber={handleEditMNumber} moveToCheckOut={moveToCheckOut} />,
    <StepFour data={data} handleEdit={handleEdit} />
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
