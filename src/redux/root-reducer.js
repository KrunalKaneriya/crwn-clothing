import userReducer from "./user/user-reducer";
import { combineReducers } from "redux";

const rootReducer =  combineReducers({
    user:userReducer
})
export {rootReducer};