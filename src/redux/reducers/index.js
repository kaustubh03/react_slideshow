/*
    Uses combineReducers Utility To Combine all The Reducers.
*/

import { combineReducers } from "redux";
import avengerReducer from "./avengerReducer";
import imageReducer from "./imageReducer";
export default combineReducers({
  imageReducer,
  avengerReducer
});
