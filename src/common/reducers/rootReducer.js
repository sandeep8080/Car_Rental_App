import { combineReducers } from "redux";
import { travelDetailsReducer } from "./travelDetailsReducer";


export const rootReducer = combineReducers({
  TravelDetails : travelDetailsReducer
});