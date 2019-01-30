import { createStore, applyMiddleware } from "redux";
import rootReducer from "./../reducers/index";
import { State } from "./state";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState: State = { courses: [] }) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}