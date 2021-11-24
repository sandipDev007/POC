import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppIntroSlider from 'react-native-app-intro-slider';
import SecureStorage from 'react-native-secure-storage';
import config from '../../utils/config';
import {LOG} from '../../utils/logger';

export default class Welcomescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await SecureStorage.getItem('welcome', config);
      if (value !== null) {
        // We have data!!
        LOG.info(value);
        if (value === 'true') {
          this.on_Done_all_slides();
        }
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  _storeData = async () => {
    try {
      await SecureStorage.setItem('welcome', 'true', config);
    } catch (error) {
      // Error saving data
    }
  };

  on_Done_all_slides = () => {
    //this.setState({ showRealApp: true });
    this._storeData();
    this.props.navigation.navigate('LoginScreen');
  };
  on_Skip_slides = () => {
    //this.setState({ showRealApp: true });
    this.props.navigation.navigate('LoginScreen');
  };
  setShowRealApp = () => {
    this.setState({showRealApp: false});
  };
  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  render() {
    if (this.state.showRealApp) {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => this.setShowRealApp()}
            />
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        // <AppIntroSlider
        //   data={slides}
        //   renderItem={this._renderItem}
        //   onDone={this._onDone}
        //   showSkipButton={true}
        //   onSkip={this._onSkip}
        //   renderDoneButton={this._renderDoneButton}
        //   renderNextButton={this._renderNextButton}
        // />

        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          onDone={this.on_Done_all_slides}
          showSkipButton={true}
          onSkip={this.on_Skip_slides}
          //bottomButton
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    image: require('../../images/intro_mobile_recharge.png'),
    backgroundColor: '#095ABA',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: require('../../images/intro_flight_ticket_booking.png'),
    backgroundColor: '#095ABA',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: require('../../images/intro_discount.png'),
    backgroundColor: '#095ABA',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    image: require('../../images/intro_best_deals.png'),
    backgroundColor: '#095ABA',
  },
  {
    key: 's6',
    title: 'Train Booking',
    text: ' 10% off on first Train booking',
    image: require('../../images/intro_train_ticket_booking.png'),
    backgroundColor: '#095ABA',
  },
];
