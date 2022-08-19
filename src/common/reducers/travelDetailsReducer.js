import { fromJS } from "immutable";
import { UPDATE_STEP_ONE_DETAILS, UPDATE_STEP_TWO_ADDITIONAL_DETAILS, UPDATE_STEP_TWO_DETAILS } from "../constants/actionConstants";

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
    case UPDATE_STEP_ONE_DETAILS:
      return state
        .set('steps', payload.steps)
        .set('sourceLocation', payload.sourceLocation)
        .set('destination', payload.destination)
        .set('carType', payload.carType)
        .set('numberOfTravellers', payload.numberOfTravellers);
    case UPDATE_STEP_TWO_DETAILS:
      return state
        .set('bidPrice', payload.bidPrice)
        .set('isBidChecked', payload.isBidChecked);
    case UPDATE_STEP_TWO_ADDITIONAL_DETAILS:
      return state
        .set('mobileNumber', payload.mobileNumber)
        .set('name', payload.name)
        .set('remark', payload.remark);
    default:
      return state
  }
} 