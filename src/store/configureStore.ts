import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";
import { State } from "./state";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState: State = { courses: [] }) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(immutableStateInvariantMiddleware()))
    );
}