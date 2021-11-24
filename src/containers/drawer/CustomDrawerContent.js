import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {LOG} from '../../utils/logger';

function CustomDrawerContent(props) {
  const onItemPress = key => {
    const filteredMainDrawerRoutes = props.drawerItems.find(e => {
      return e.key === key;
    });
    const selectedRoute = filteredMainDrawerRoutes.route;
    props.navigation.toggleDrawer();
    props.navigation.navigate(selectedRoute.nav, {
      screen: selectedRoute.routeName,
    });
  };

  const logOut = async () => LOG.info('log out');

  function renderMainDrawer() {
    return (
      <View>
        {props.drawerItems.map(parent => (
          <View key={parent.key}>
            <TouchableOpacity
              key={parent.key}
              testID={parent.key}
              onPress={() => {
                onItemPress(parent.key);
              }}>
              <View style={styles.parentItem}>
                <Text style={[styles.title]}>{parent.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        {renderLogoutBtn()}
      </View>
    );
  }

  function renderLogoutBtn() {
    return (
      <View>
        <TouchableOpacity onPress={logOut} testID="customDrawer-logout">
          <View style={styles.parentItem}>
            <Text style={styles.title}>{'Log out'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.centered}>
          <Image
            source={require('../../images/Menu_Image.png')}
            style={styles.logo}
          />
        </View>
        {renderMainDrawer()}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection: 'row',
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 282,
    height: 175,
    resizeMode: 'cover',
  },
  drawerContainer: {
    backgroundColor: '#C6CBCD29',
  },
  container: {
    flex: 1,
    zIndex: 1000,
  },
  centered: {
    alignItems: 'center',
  },
  parentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#586C8A',
    paddingTop: 4,
    paddingBottom: 4,
  },
  title: {
    margin: 16,
    fontWeight: '400',
    color: '#586C8A',
    textAlign: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default CustomDrawerContent;
