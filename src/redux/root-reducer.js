import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart.reducer";
import { combineReducers } from "redux";

const rootReducer =  combineReducers({
    user:userReducer,
    cart:cartReducer
})
export {rootReducer};