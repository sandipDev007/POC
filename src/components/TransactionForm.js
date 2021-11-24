/* eslint-disable prettier/prettier */
import {Content, Input, Item, Label, Text, View} from 'native-base';
import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from './DatePicker';
import RecentTransfer from './RecentTransfer';

export default class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '3762 2342 0349 0372',
    };
  }

  render() {
    return (
      <Content style={styles.content}>
        <View>
          <View style={styles.marginBottom}>
            <Label style={styles.color}>From Account</Label>
            <DropDownPicker
              items={[
                {label: '3762 2342 0349 0372', value: '45,000.00'},
                {label: '3762 2342 0349 0333', value: '48,000.00'},
                {label: '3762 2342 0349 0444', value: '50,000.00'},
              ]}
              defaultValue={this.state.label}
              containerStyle={[styles.height, styles.width]}
              style={styles.backgroundColor}
              itemStyle={styles.justifyContent}
              dropDownStyle={styles.backgroundColor}
              arrowStyle={styles.marginRight}
              arrowColor={'#D01D22'}
              arrowSize={20}
              onChangeItem={item =>
                this.setState({
                  country: item.value,
                })
              }
            />
          </View>
          <View style={styles.marginBottom}>
            <View>
              <Label style={styles.color}>To Account</Label>
            </View>
            <View style={[styles.height, styles.width]}>
              <Content style={styles.backgroundColor}>
                <Item style={styles.item}>
                  <Input placeholder="Search Biller code" />
                  <Image
                    style={styles.image}
                    source={require('../images/Search.png')}
                  />
                </Item>
              </Content>
            </View>
          </View>
          <View style={styles.marginBottom}>
            <View>
              <Label style={[styles.color, styles.marginLeft]}>
                Recent Transactions
              </Label>
            </View>
            <View style={styles.width}>
              <RecentTransfer />
            </View>
          </View>
          <View style={styles.marginBottom}>
            <View>
              <Label style={styles.color}>Account</Label>
            </View>
            <View style={[styles.backgroundColor, styles.height, styles.width]}>
              <Item>
                <Label>MYR</Label>
                <Input keyboardType="numeric" placeholder="Enter Amount" />
              </Item>
            </View>
          </View>
          <View style={styles.marginBottom}>
            <View>
              <Label style={styles.marginLeftLabel}>When</Label>
            </View>
            <View style={[styles.backgroundColor, styles.width]}>
              <Item>
                <DatePicker />
              </Item>
            </View>
          </View>
          <View style={styles.width}>
            <LinearGradient
              colors={['#790207', '#EC1E22', '#790207']}
              style={styles.linearGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.textColor}>Pay Now</Text>
            </LinearGradient>
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 8,
    marginHorizontal: 5,
  },
  color: {
    color: '#8E8E8E',
  },
  width: {
    width: 300,
  },
  height: {
    height: 50,
  },
  marginLeftLabel: {
    marginLeft: 8,
  },
  textColor: {
    color: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    width: 50,
    height: 50,
  },
  justifyContent: {
    justifyContent: 'flex-start',
  },
  backgroundColor: {backgroundColor: '#F2F2F2'},
  marginBottom: {marginBottom: 25},
  marginRight: {marginRight: 5},
  marginLeft: {marginLeft: 5},
  viewCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderBox: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 15,
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
    paddingVertical: 5,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
  },
});
