import { combineReducers } from "redux";
import movies from "./movies_reducers";

const rootReducer = combineReducers({
  //this means movies:movies this is what the payload is called
  movies,
});

export default rootReducer;
