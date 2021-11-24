import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Label, Card, Text, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {withTranslation} from 'react-i18next';
import {LOG} from '../utils/logger';

class UpcomingBillerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: this.props.billsData,
    };
  }
  _renderItem = item => {
    LOG.info('_renderItem', item);
    return (
      <Card style={[styles.cardImage, styles.imageViewShadowBox]}>
        <View style={[styles.container]}>
          <View style={{flex: 3}}>
            <Image
              style={styles.introImageStyle}
              source={{uri: item.cardImg}}
            />
          </View>
          <View style={{flex: 3}}>
            <View>
              <Text style={[styles.textColor]}>{item.currency}</Text>
            </View>
            <View>
              <Text style={[styles.textColor, styles.accBalance]}>
                {item.balance.split('.')[0]}.
                <Label style={[styles.amtFloatingText, styles.textColor]}>
                  {item.balance.split('.')[1]}
                </Label>
              </Text>
            </View>
            <View>
              <Label>{item.date}</Label>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 5}}>
          <LinearGradient
            colors={['#790207', '#EC1E22', '#790207']}
            style={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text style={{color: '#fff'}}>{this.props.t('payButton')}</Text>
          </LinearGradient>
        </View>
      </Card>
    );
  };

  render() {
    const {t} = this.props;
    return (
      <View>
        <View style={styles.upcomingView}>
          <View style={styles.upcomingTitleView}>
            <Label style={styles.titleUpcoming}>
              {t('BillerCard.upcoming')}
            </Label>
            <Label> {t('BillerCard.bill')}</Label>
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

export default withTranslation()(UpcomingBillerCard);
const styles = StyleSheet.create({
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
  introImageStyle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
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
  cardImage: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
    width: 300,
    marginRight: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  textColor: {
    color: '#000000',
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
  imageViewShadowBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.46,
    shadowRadius: 15,
    elevation: 10,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
  },
});
