import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Label} from 'native-base';
import {LOG} from '../utils/logger';
export default class AccountTypeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [this.props.carouselItems],
    };
  }

  get pagination() {
    const {carouselItems, activeIndex} = this.state;
    LOG.info(activeIndex);
    return (
      <View style={styles.marginTop}>
        <Pagination
          dotsLength={
            this.props.carouselItems === undefined
              ? 0
              : this.props.carouselItems.length
          }
          activeDotIndex={activeIndex}
          containerStyle={styles.backColor}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }

  _renderItem = ({item, index}) => {
    return (
      <ImageBackground source={{uri: item.cardImg}} style={styles.backImage}>
        <View style={[styles.container, styles.centerContentStyle]}>
          <View style={{flex: 3}} />
          <View style={{flex: 1}}>
            <Text style={[styles.textColor]}>{item.currency}</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={[styles.textColor, styles.accBalance]}>
              {item.balance.split('.')[0]}.
              <Label style={[styles.amtFloatingText, styles.textColor]}>
                {item.balance.split('.')[1]}
              </Label>
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={[styles.container1, {flex: 4}]}>
            <View>
              <Text style={[styles.textColor]}>{item.accType}</Text>
            </View>
            <View>
              <Text style={[styles.textColor]}>{item.accNumber}</Text>
            </View>
            <View>
              <Text style={[styles.textColor]}>{item.date}</Text>
            </View>
          </View>
          <View style={{flex: 2}}>
            <View>
              <Text style={[styles.textColor]}>{item.accName}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View style={[styles.accountSlider]}>
          <Carousel
            ref={ref => (this.carousel = ref)}
            data={this.props.carouselItems}
            sliderWidth={400}
            itemWidth={400}
            renderItem={this._renderItem}
            onBeforeSnapToItem={index => this.setState({activeIndex: index})}
          />
          {this.pagination}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  accountSlider: {
    marginTop: -50,
  },
  marginTop: {
    marginTop: -15,
  },
  backColor: {
    backgroundColor: '#FFF',
  },
  backImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 220,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  textColor: {
    color: '#fff',
  },
  accBalance: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  amtFloatingText: {
    color: '#2D8857',
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: 30,
  },
  dotStyle: {
    width: 20,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#EC1E22',
  },
});
