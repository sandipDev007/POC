import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Label} from 'native-base';
import {withTranslation} from 'react-i18next';

class Sliderscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: this.props.whatsNewData,
    };
  }
  _renderItem = item => {
    return (
      <View style={styles.sliderBox}>
        <Image style={styles.introImageStyle} source={{uri: item.image}} />
      </View>
    );
  };

  render() {
    const {t} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.upcomingView}>
          <View style={styles.upcomingTitleView}>
            <Label style={styles.titleUpcoming}>
              {t('whatsNewBanner.what')}
            </Label>
            <Label> {t('whatsNewBanner.new')}!</Label>
          </View>
          <View style={styles.imageView}>
            <Image source={require('../images/ArrowRight.png')} />
          </View>
        </View>
        <ScrollView horizontal={true}>
          {this.state.slides.map(item => this._renderItem(item))}
        </ScrollView>
      </View>
    );
  }
}
export default withTranslation()(Sliderscreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  titleUpcoming: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    borderStartColor: '#F55753',
  },
  upcomingView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upcomingTitleView: {
    flex: 1,
    flexDirection: 'row',
  },
  imageView: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  introImageStyle: {
    width: 251,
    height: 246,
    resizeMode: 'cover',
  },
  sliderBox: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
