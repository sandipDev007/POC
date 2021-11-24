import SecureStorage from 'react-native-secure-storage';
import config from './utils/config';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useReducer} from 'react';
import {StyleProvider} from 'native-base';
import {ActivityIndicator, Alert, useColorScheme, View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {useAuth} from './containers/context/AuthContext';
import {AuthContext} from './containers/context/context';
import {NetworkProvider} from './containers/context/NetworkContext';
import {MainDrawerNavigation} from './containers/Navigation/Navigation';
import {Auth} from './containers/Navigation/Navigation';
import styles from './containers/styles/sharedStyles';
import CustomHeader from './containers/customHeader/CustomHeader';
import {RETRIVE_TOKEN} from './store/actions/login/types';
import homeReducer from './store/reducers/home/homeReducer';
import loginReducer, {initialState} from './store/reducers/login/loginReducer';
import './translations';
import theme from './theme/index';
import RemotePushController from './services/RemotePushController';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(homeReducer);

const Stack = createStackNavigator();

const App = () => {
  const scheme = useColorScheme();
  const [loginState, dispatch] = useReducer(loginReducer, initialState);
  const {authContext} = useAuth();

  useEffect(() => {
    const bootasyncfun = async () => {
      let userToken = null;
      try {
        userToken = await SecureStorage.getItem('userToken', config);
      } catch (e) {
        Alert.alert(e);
      }
      dispatch({type: RETRIVE_TOKEN, token: userToken});
    };
    bootasyncfun();
  });

  if (loginState.isLoading) {
    return (
      <View style={styles.ActivityIndicator}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <NetworkProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <StyleProvider style={theme()}>
            <Provider store={store}>
              <RemotePushController />
              <Stack.Navigator>
                {loginState.userToken !== null ? (
                  <Stack.Screen
                    name="Dashboard"
                    component={MainDrawerNavigation}
                    options={{
                      headerMode: 'screen',
                      headerTintColor: styles.homeHeaderTintColor,
                      headerTitleStyle: styles.homeheaderTitleStyle,
                      header: props => {
                        return <CustomHeader {...props} />;
                      },
                    }}
                  />
                ) : (
                  <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{headerShown: false}}
                  />
                )}
              </Stack.Navigator>
            </Provider>
          </StyleProvider>
        </NavigationContainer>
      </AuthContext.Provider>
    </NetworkProvider>
  );
};

export default App;
