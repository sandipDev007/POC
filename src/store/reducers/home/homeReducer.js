/* eslint-disable prettier/prettier */
import {
    FETCHING_HOME_REQUEST,
    FETCHING_HOME_SUCCESS,
    FETCHING_HOME_FAILURE,
  } from '../../actions/home/types.js';

  const initialState = {
    data: [],
    errorMessage: '',
    isFetching: false,
  };

  const homeReducer = (state = initialState, action) => {
      switch (action.type) {
        case FETCHING_HOME_REQUEST:
            return {...state, isFetching: true};
        case FETCHING_HOME_FAILURE:
            return {...state, isFetching: false, errorMessage: action.payload};
        case FETCHING_HOME_SUCCESS:
            return {...state, isFetching: false, data: action.payload};
        default:
            return state;
      }
  };

  export default homeReducer;
