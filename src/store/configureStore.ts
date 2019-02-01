import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { State } from "./state";

export default function configureStore(initialState: State = { courses: [] }) {
    debugger
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware, immutableStateInvariantMiddleware()))
    );
}