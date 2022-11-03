import { combineReducers } from "@reduxjs/toolkit";
import user from './modules/user';
import detail from './modules/detail';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const mainReducer = combineReducers({
    user,
    detail,
})
const persistConfig = {
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,mainReducer);
export default persistedReducer;