/* eslint-disable prettier/prettier */
import {
  FETCHING_HOME_REQUEST,
  FETCHING_HOME_SUCCESS,
  FETCHING_HOME_FAILURE,
} from './types.js';
import {FETCHING_HOME_URL} from '../../../url_constants/serviceURL';

export const fetchingHomeRequest = () => ({type: FETCHING_HOME_REQUEST});

export const fetchingHomeSuccess = json => ({
  type: FETCHING_HOME_SUCCESS,
  payload: json,
});

export const fetchingHomeFailure = error => ({
  type: FETCHING_HOME_FAILURE,
  payload: error,
});

export const fetchHomeData = () => {
  return async dispatch => {
    dispatch(fetchingHomeRequest());
    try {
      let response = await fetch(
        FETCHING_HOME_URL,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      let json = await response.json();
      dispatch(fetchingHomeSuccess(json.homeResponse));
    } catch (error) {
      dispatch(fetchingHomeFailure(error));
    }
  };
};
