import React from "react";
import { HOME, TRAVEL_DETAIL, OTP, SUBMIT_BID } from "./constants/routeConstants";

// Lazy loading of the components
const StepOne = React.lazy(() => import("../components/formSteps/StepOne"));
const StepTwo = React.lazy(() => import("../components/formSteps/StepTwo"));
const StepThree = React.lazy(() => import("../components/formSteps/StepThree"));
const StepFour = React.lazy(() => import("../components/formSteps/StepFour"));

export const routeList = [
  {
    description: 'Home Page',
    path: HOME,
    element:
      <React.Suspense fallback={<div>...Loading !!</div>}>
        <StepOne nextStep={TRAVEL_DETAIL} />
      </React.Suspense>,

  },
  {
    description: ' User Travel Details',
    path: TRAVEL_DETAIL,
    element:
      <React.Suspense fallback={<div>...Loading !!</div>}>
        <StepTwo nextStep={OTP} prevStep={HOME} />
      </React.Suspense>,
  },
  {
    description: 'OTP Page',
    path: OTP,
    element:
      <React.Suspense fallback={<div>...Loading !!</div>}>
        <StepThree nextStep={SUBMIT_BID} prevStep={TRAVEL_DETAIL} />
      </React.Suspense>,
  },
  {
    description: 'Submit Travel Bid Page',
    path: SUBMIT_BID,
    element: <React.Suspense fallback={<div>...Loading !!</div>}>
      <StepFour prevStep={OTP} />
    </React.Suspense>,
  }, {
    description: 'Not Found Page',
    path: '*',
    element: <div>
      <p>404 PAGE NOT FOUND !!</p>
    </div>
  }
]