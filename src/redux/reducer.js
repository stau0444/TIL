import { combineReducers } from "@reduxjs/toolkit";
import user from './modules/user';
import detail from './modules/detail';

const mainReducer = combineReducers({
    user,
    detail,
})

export default mainReducer;