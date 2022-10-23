import { combineReducers } from "@reduxjs/toolkit";
import login from './modules/login';
import detail from './modules/detail';

const mainReducer = combineReducers({
    login,
    detail,
})

export default mainReducer;