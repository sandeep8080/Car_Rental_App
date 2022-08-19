import { UPDATE_STEP_ONE_DETAILS, UPDATE_STEP_TWO_ADDITIONAL_DETAILS, UPDATE_STEP_TWO_DETAILS } from "../constants/actionConstants"

export const saveStepOneDetails = (values) => {
  return {
    type: UPDATE_STEP_ONE_DETAILS,
    payload: values,
  }
};

export const saveStepTwoDetails = (values) => {
  return {
    type: UPDATE_STEP_TWO_DETAILS,
    payload: values,
  }
};

export const saveStepTwoAdditionalDetails = (values) => {
  return {
    type: UPDATE_STEP_TWO_ADDITIONAL_DETAILS,
    payload: values,
  }
}

