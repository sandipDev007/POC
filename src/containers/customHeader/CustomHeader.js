import {DrawerActions} from '@react-navigation/native';
import {Badge, Body, Button, Header, Left, Right, Text} from 'native-base';
import React, {useContext} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {AuthContext} from '../context/context';
import {LOG} from '../../utils/logger';

function CustomHeader(props) {
  const {signOut} = useContext(AuthContext);
  const toggleDrawer = () =>
    props.navigation.dispatch(DrawerActions.toggleDrawer());

  const handleLogoutPress = () => {
    Alert.alert('Logout', 'Are you sure you want to logout ?', [
      {
        text: 'Cancel',
        onPress: () => LOG.info('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => signOut()},
    ]);
  };
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../images/Header.png')}
        style={styles.backImage}
      />
      <Header>
        <Left>
          <Button
            transparent
            onPress={toggleDrawer}
            testID="CustomHeader-toggleDrawer">
            <Image
              style={styles.MenuIcon}
              source={require('../../images/MenuIcon.png')}
            />
          </Button>
        </Left>
        <Body>
          <Image
            style={styles.headerImg}
            source={require('../../images/Logo.png')}
          />
        </Body>
        <Right>
          <Button
            transparent
            onPress={toggleDrawer}
            testID="CustomHeader-toggleDrawer">
            <Image source={require('../../images/icons/bell.png')} />
            <Badge style={styles.BadgeColor}>
              <Text style={styles.BadgeTxt}>2</Text>
            </Badge>
          </Button>
          <Button
            transparent
            onPress={handleLogoutPress}
            testID="CustomHeader-toggleDrawer">
            <Image source={require('../../images/icons/logout.png')} />
          </Button>
        </Right>
      </Header>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MenuIcon: {
    height: 22,
    width: 22,
  },
  headerImg: {width: '100%', height: 30, margin: 20, resizeMode: 'contain'},
  BadgeColor: {
    backgroundColor: '#E6E6E6',
    height: 21,
    width: 22,
    marginLeft: -6,
  },
  BadgeTxt: {
    color: '#D01D22',
    fontSize: 8,
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default CustomHeader;
