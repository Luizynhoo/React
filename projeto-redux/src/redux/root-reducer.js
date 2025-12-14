//Chamar todos os reducers e combiná-los em um root reducer

import { combineReducers } from 'redux';
import  userReducer  from './user/slice';

export default combineReducers ({
    user: userReducer,
})