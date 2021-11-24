import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';
import {withTranslation} from 'react-i18next';

class HomeMenus extends Component {
  constructor(props) {
    super(props);
    this.state = {activeIndex: 0};
  }

  render() {
    const {t} = this.props;
    return (
      <View style={styles.viewContent}>
        <Card style={[styles.sliderBox, styles.shadowBox]}>
          <View style={styles.viewCard}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={styles.center}
                onPress={() => alert('Duit Now Button pressed...')}>
                <View style={styles.menuIcon}>
                  <Image source={require('../images/icons/invest.png')} />
                </View>
                <Text style={styles.homeMenuText}>{t('homeMenu.invest')}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={styles.center}
                onPress={() => alert('Duit Now Button pressed...')}>
                <View style={styles.menuIcon}>
                  <Image source={require('../images/icons/transfer.png')} />
                </View>
                <Text style={styles.homeMenuText}>
                  {t('homeMenu.transfer')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={styles.center}
                onPress={() => alert('Duit Now Button pressed...')}>
                <View style={styles.menuIcon}>
                  <Image source={require('../images/icons/details.png')} />
                </View>
                <Text style={styles.homeMenuText}>{t('homeMenu.details')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

export default withTranslation()(HomeMenus);

const styles = StyleSheet.create({
  viewCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  sliderBox: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 15,
  },
  shadowBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.46,
    shadowRadius: 15,
    elevation: 10,
  },
  homeMenuText: {
    color: '#333333',
    marginTop: 5,
  },
  menuIcon: {
    height: 25,
  },
  viewContent: {
    marginHorizontal: 20,
    marginTop: -15,
  },
  center: {alignItems: 'center'},
});
