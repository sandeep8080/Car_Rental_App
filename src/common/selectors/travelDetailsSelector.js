import { createSelector } from "reselect";

const getTravelData = state => {
  console.log(state);
  return state.TravelDetails;
};


export const selectSteps = createSelector(getTravelData, TravelDetails => TravelDetails.getIn(['steps']));
export const selectSourceLocation = createSelector(getTravelData, TravelDetails => TravelDetails.getIn(['sourceLocation']));
export const selectDestination = createSelector(getTravelData, TravelDetails => TravelDetails.getIn(['destination']));
export const selectCarType = createSelector(getTravelData, TravelDetails => TravelDetails.getIn(['carType']));
export const selectNumberOfTravellers = createSelector(getTravelData, TravelDetails => TravelDetails.getIn(['numberOfTravellers']));
export const selectBidPrice = createSelector(getTravelData, TravelDetails => TravelDetails.getIn(['bidPrice']));
export const selectisBidChecked = createSelector(getTravelData, TravelDetails => TravelDetails.getIn(['isBidChecked']));