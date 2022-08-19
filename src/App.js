import './App.css';
import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Box } from '@material-ui/core'
import { routeList } from './common/routeConfig';
import { useRoutes } from 'react-router-dom';

function App() {
  // TODO need to implement the logic to handle the steps counter
  // const [currentStep, setCurrentStep] = useState(1);

  // const handleNextStepOne = (newData) => {
  //   let dataCopy = { ...data };
  //   dataCopy = { ...dataCopy, ...newData };
  //   setData(dataCopy);
  //   setCurrentStep(2);
  // };

  // const handleEdit = () => {
  //   setCurrentStep(1);
  // };

  // const handleEditMNumber = () => {
  //   setCurrentStep(2);
  // };

  // const handleBid = (newBid) => {
  //   let dataCopy = { ...data };
  //   dataCopy = { ...dataCopy, ...newBid };
  //   setData(dataCopy);
  // }

  // const handleSendOtp = (newData) => {
  //   let dataCopy = { ...data };
  //   dataCopy = { ...dataCopy, ...newData };
  //   setData(dataCopy);
  //   setCurrentStep(3);
  // };

  // const moveToCheckOut = (otp) => {
  //   console.log(otp);
  //   if (otp.join('') === '1234') {
  //     setCurrentStep(4);
  //   } else {
  //     console.log('Invalid OTP');
  //   }
  // };

  // const steps = [
  //   <StepOne data={data} nextStep={handleNextStepOne} />,
  //   <StepTwo data={data} handleEdit={handleEdit} handleSendOtp={handleSendOtp} handleBid={handleBid} />,
  //   <StepThree data={data} handleEdit={handleEdit} handleEditMNumber={handleEditMNumber} moveToCheckOut={moveToCheckOut} />,
  //   <StepFour data={data} handleEdit={handleEdit} />
  // ];
  const elements = useRoutes(routeList);
  return (
    <div className="App">
      <AppBar position="static" className="appbar" elevation={0}>
        <Toolbar className="toolbar">
          <img src="https://d1rgemtytdlz2g.cloudfront.net/Vahak_Blue.png" alt="Vahak" className='logo-img' />
        </Toolbar>
      </AppBar>
      <Box className='formHeader'>
        <h1> Place your Bid({1}/4 step) </h1>
      </Box>
      <Container maxWidth="sm" className='form-container'>
        {/* {steps[currentStep - 1]} */}
        <React.Suspense>
          {elements}
        </React.Suspense>

      </Container>
    </div>
  );
}

export default App;
