import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Card, Item, Text, Label, View} from 'native-base';
import {withTranslation} from 'react-i18next';

class HomeAccountBalance extends Component {
  render() {
    const {t} = this.props;
    return (
      <Card style={styles.card}>
        <Item style={styles.item}>
          <View style={styles.container}>
            <View style={styles.currencyView}>
              <Label style={styles.myrText}>{this.props.currency}</Label>
            </View>
            <View style={{flex: 4}}>
              <View>
                <Text style={styles.amtText}>
                  {this.props.balance.split('.')[0]}.
                  <Label style={styles.amtFloatingText}>
                    {this.props.balance.split('.')[1]}
                  </Label>
                </Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Label style={styles.valueText}>{t('homeValue.val')}</Label>
            </View>
            <View style={{flex: 1}}>
              <Image
                source={require('../images/icons/homeArrow.png')}
                style={styles.imgStyle}
              />
            </View>
          </View>
        </Item>
      </Card>
    );
  }
}

export default withTranslation()(HomeAccountBalance);

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginVertical: 20,
  },
  currencyView: {
    flex: 1,
    marginRight: -30,
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myrText: {
    color: '#2D8857',
    fontSize: 13,
    fontWeight: '900',
    paddingBottom: 20,
  },
  amtText: {
    color: '#2D8857',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  amtFloatingText: {
    color: '#2D8857',
    fontSize: 15,
    fontWeight: '900',
    paddingBottom: 30,
  },
  valueText: {
    color: '#333333',
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: -10,
  },
  imgStyle: {
    marginHorizontal: 10,
  },
});
