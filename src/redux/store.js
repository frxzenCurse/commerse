import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import rootReducers from "./reducers/rootReducer";

export const store = createStore(rootReducers, applyMiddleware(thunk))