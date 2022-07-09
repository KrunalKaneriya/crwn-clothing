import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {logger} from "redux-logger"
import { rootReducer } from "./root-reducer";
import { persistStore } from "redux-persist";
import persistReducer from "./root-reducer";


const serializableCheck = {
    ignoredActionPaths : "payload.createdAt",
    ignoredPaths: ["firebase","firestore","user.currentUser.createdAt"]
}
const middlewares = [logger,serializableCheck];


export const store = configureStore({reducer:persistReducer, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck:false}).concat(logger)
});

export const persistor = persistStore(store);