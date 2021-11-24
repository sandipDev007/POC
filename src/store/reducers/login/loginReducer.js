/* eslint-disable prettier/prettier */
import {
    AUTHENTICATE_LOGIN_REQUEST,
    AUTHENTICATE_LOGOUT_REQUEST,
    RETRIVE_TOKEN,
    REGISTER,
  } from '../../actions/login/types.js';

  export const initialState = {
    isLoading : true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (state = initialState, action) => {
      switch (action.type) {
        case AUTHENTICATE_LOGIN_REQUEST:
            return {...state, userToken: action.token, userName: action.id, isLoading: true};
        case AUTHENTICATE_LOGOUT_REQUEST:
            return {...state, userToken: null, userName: null, isLoading: false};
        case RETRIVE_TOKEN:
            return {...state, userToken: action.token, isLoading: false};
        case REGISTER:
            return {...state, userToken: action.token, userName: action.id, isLoading: false};
        default:
            return state;
      }
  };

  export default loginReducer;
