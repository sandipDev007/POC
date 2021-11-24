/* eslint-disable prettier/prettier */
import {useReducer, useMemo} from 'react';
import {
  Alert,
} from 'react-native';
import SecureStorage from 'react-native-secure-storage';
import {
    AUTHENTICATE_LOGIN_REQUEST,
    AUTHENTICATE_LOGOUT_REQUEST,
  } from '../../store/actions/login/types';
import config from '../../utils/config';
import loginReducer, {initialState} from '../../store/reducers/login/loginReducer';
import {LOG} from '../../utils/logger';
import {AUTH_CHECK_URL} from '../../url_constants/serviceURL';

export function useAuth() {
const [loginState, dispatch] = useReducer(loginReducer, initialState);
    const authContext = useMemo(
        () => ({
          signIn: async (userName, password) => {
            let userToken = null;
            let response = await fetch(AUTH_CHECK_URL, {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            });
            let json = await response.json();
            json.authResponse.map((user) => {
              if (userName === user.userId && password === user.password) {
                try {
                  userToken = user.userToken;
                  SecureStorage.setItem('userToken', userToken, config);
                } catch (e) {
                  LOG.info(e);
                }
              }
            }
          );
          if (!userToken) {
            Alert.alert('','User does not exist.');
            return false;
          }
            dispatch({
              type: AUTHENTICATE_LOGIN_REQUEST,
              id: userName,
              token: userToken,
            });
          },
          signOut: async () => {
            try {
              await SecureStorage.removeItem('userToken', config);
            } catch (e) {
              alert(e);
            }
            dispatch({type: AUTHENTICATE_LOGOUT_REQUEST});
          },
        }),
        [],
      );
      return {authContext};
}


