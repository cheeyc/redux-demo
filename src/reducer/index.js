import {combineReducers} from "redux";
import counterReducer from "./counter";
import approvalReducer from "./approval";
import {usersReducer} from "./user";

const allReducers = combineReducers({
    counter: counterReducer,
    approval: approvalReducer,
    users: usersReducer
});

export default allReducers;
