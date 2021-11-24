/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomDrawerContent from '../drawer/CustomDrawerContent.js';
import {drawerItemsMain} from '../drawer/drawerItemsMain';
import styles from '../../containers/styles/sharedStyles';
import Home from '../../containers/Screens/Home';
import WelcomeScreen from '../../containers/Welcome/Welcomescreen';
import LoginScreen from '../../containers/Login/Login';
import RegisterScreen from '../../containers/Registration/Registration';
import {
    Text,
    View,
  } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// ***** Auth Navigation Flow ***** //
export const Auth = () => {
    return (
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register',
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    );
  };

// ***** App Navigation Flow ***** //

export function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.settingStyle}>
      <Text>Settings Screen</Text>
    </View>
  );
}



