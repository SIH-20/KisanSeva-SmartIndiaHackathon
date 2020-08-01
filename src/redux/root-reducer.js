import {combineReducers} from "redux";
import userReducer from  "./user/user.reducer";
import cropReducer from "./crop/crop.reducer";
export default combineReducers({
    user: userReducer,
    crop:cropReducer
})