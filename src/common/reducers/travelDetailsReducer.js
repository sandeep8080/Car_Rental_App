import { fromJS } from "immutable";
import { UPDATE_SRC_LOCATION } from "../constants/actionConstants";

// Setting the state in JS Map rather than JS Object
export const initialState = fromJS({
  sourceLocation: '',
  destination: '',
  carType: '',
  numberOfTravellers: 1,
  bidPrice: 0,
  isBidChecked: false,
  mobileNumber: '',
  name: '',
  remark: '',
  steps: 1,
});

export function travelDetailsReducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case UPDATE_SRC_LOCATION:
      return state
        .set('sourceLocation', payload.sourceLocation)
        .set('destination', payload.destination)
        .set('carType', payload.carType)
        .set('numberOfTravellers', payload.numberOfTravellers)
        .set('steps', payload.steps);
    default:
      return state
  }
} 