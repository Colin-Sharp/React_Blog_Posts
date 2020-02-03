import { combineReducers } from "redux";
import speakerReducer from "./speakerReducer";

export default combineReducers({
  speaker: speakerReducer
});
