import { UPDATE_SRC_LOCATION } from "../constants/actionConstants"

export const saveTravelDetails = (values) => {
  return {
    type: UPDATE_SRC_LOCATION,
    payload: values,
  }
};