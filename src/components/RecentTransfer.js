/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import {LOG} from '../utils/logger';

export default class RecentTransfer extends Component {
  _renderItem = item => {
    LOG.info('_renderItem', item);
    return (
      <View style={styles.sliderBox}>
        <Image style={styles.introImageStyle} source={item.image} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.subContainer}>
            <ScrollView horizontal={true}>
            {slides.map(item => this._renderItem(item))}
            </ScrollView>
          </View>
          <View style={styles.imageView}>
            <Image source={require('../images/ArrowRight.png')} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
   },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
   },
  imageView: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  introImageStyle: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

const slides = [
  {
    key: 's1',
    image: require('../images/Jenny.png'),
  },
  {
    key: 's2',
    image: require('../images/John.png'),
  },
  {
    key: 's3',
    image: require('../images/Pablo.png'),
  },
  {
    key: 's4',
    image: require('../images/Aarif.png'),
  },
];
