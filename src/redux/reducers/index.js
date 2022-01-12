import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import MovieReducer from "./MovieReducer";
const rootreducer = combineReducers({ UserReducer, MovieReducer });

export default rootreducer;
