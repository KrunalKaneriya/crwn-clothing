import { applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {logger} from "redux-logger"
import { rootReducer } from "./root-reducer"
// import rootReducer


const serializableCheck = {
    ignoredActionPaths : "payload.createdAt",
    ignoredPaths: ["firebase","firestore","user.currentUser.createdAt"]
}
const middlewares = [logger,serializableCheck];

const store = configureStore({reducer:rootReducer, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck:false}).concat(logger)
});
export default store;