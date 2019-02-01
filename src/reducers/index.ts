import { combineReducers, Reducer } from "redux";
import courseReducer from "./course.reducer";
import { State } from "../store/state";

const rootReducer: Reducer<State> = combineReducers({
    courses: courseReducer
});

export default rootReducer;