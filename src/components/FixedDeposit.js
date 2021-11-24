/* eslint-disable prettier/prettier */
import { Card, Label, Text } from 'native-base';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LOG} from '../utils/logger';

class FixedDeposit extends Component {
  constructor(props){
      super(props);
      this.state = {
        slides : this.props.depositData,
      };
  }

  _renderItem = item => {
    LOG.info('_renderItem', item);
    return (
      <Card style={[styles.cardImage, styles.imageViewShadowBox]}>
        <View style={[styles.container]} >
            <View style={{flex: 3}}>
                <View  style={[styles.accNumber]}>
                    <Text style={[styles.accDetails]}>{this.props.t('fixedDeposit.acNum')}: {item.accNumber}</Text>
                </View>
                <View style={[styles.balance]}>
                    <Text style={[styles.textColor]}>{item.currency} {item.balance}</Text>
                </View>
                <View style={[styles.valueDate]}>
                    <Text>{this.props.t('fixedDeposit.valDate')}</Text>
                    <Text>{item.valueDate}</Text>
                </View>

            </View>
            <View style={{flex: 3}}>
                <View style={[styles.interest]}>
                    <Text>{item.interest}</Text>
                </View>
                <View style={[styles.interestPerc]}>
                    <Text style={[styles.textColor]}>{item.interestPerc}</Text>
                </View>
                <View style={[styles.matDate]}>
                    <Text>{this.props.t('fixedDeposit.matDate')}</Text>
                    <Text>{item.maturityDate}</Text>
                </View>
            </View>
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
            <Label style={styles.titleUpcoming}>{t('fixedDeposit.fixed')}</Label>
            <Label> {t('fixedDeposit.deposit')}</Label>
          </View>

        </View>
        <ScrollView horizontal={true}>
          {this.state.slides.map(item => this._renderItem(item))}
        </ScrollView>

          <View style={styles.linearGradientView}>
          <LinearGradient
            colors={['#6684FC', '#6A84FC', '#B189FC']}
            style={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text style={styles.color}>{t('fixedDeposit.fdBtn')}</Text>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

export default  withTranslation()(FixedDeposit);

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
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  cardImage: {
    flex: 1,
    justifyContent: 'center',
    height: 214,
    width: 335,
    marginRight: 10,
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
  linearGradientView: {marginHorizontal: 20, marginVertical: 20},
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    right: 15,
  },
  accDetails: {
    color: '#000000',
    width: 200,
  },
  textColor: {
    color: '#2D8857',
    fontWeight: 'bold',
    fontSize: 20,
  },
  accNumber: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  interest: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  balance: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 150,
    borderRightWidth: 0.2,
    marginTop:20,
  },
  interestPerc: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueDate: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop:20,
  },
  matDate: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    color: '#fff',
  },
});
