/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import homeReducer from './home/homeReducer';
import loginReducer from './login/loginReducer';

const rootReducer = combineReducers({
    homeReducer,
    loginReducer,
});

export default rootReducer;
