/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import { Content, Label, Accordion, Text, View } from 'native-base';
import TransactionForm from './TransactionForm';
import {withTranslation} from 'react-i18next';

class TranscationAccordionType extends Component {
          constructor(props) {
            super(props);
            this.dataArray = [
              { title: this.props.t('TransactionAccordion.jompay'), content: <TransactionForm />, image:require('../images/icons/jomPay.png') },
              { title: this.props.t('TransactionAccordion.duitnow'), content: <TransactionForm />, image:require('../images/icons/doitNow.png')},
              { title: this.props.t('TransactionAccordion.qrPay'), content: <TransactionForm />, image:require('../images/icons/qrPay.png') },
            ];
          }
    _renderHeader(item, expanded) {
        return (

          <View style={[styles.shadowBox, expanded ? styles.paymentViewExpanded : styles.paymentView]}>
              <View style={[styles.itemView]}>
                <Image source={item.image} />
                <Text style={expanded ? styles.accordionHeaderTextExpanded : styles.accordionHeaderText}>
                  {item.title}
                </Text>
              </View>

            {expanded
              ? <View style={styles.imageView}><Image source={require('../images/icons/upArrow.png')} /></View>
              : <View style={styles.imageView}><Image source={require('../images/icons/rightArrow.png')} /></View>
              }
          </View>
        );
      }
      _renderContent(item) {
        return (
          <Text
            style={[styles.itemContent]}
          >
            {item.content}
          </Text>
        );
      }

  render() {
    const {t} = this.props;
    return (
      <View>
       <View style={styles.viewQuick}>
              <Label style={styles.titleQuick}>
              {t('TransactionAccordion.quick')}
              </Label>
              <Label >
              {' '}{t('TransactionAccordion.pay')}
              </Label>
        </View>
        <View>
             <Content padder>
              <Accordion
                    dataArray={this.dataArray}
                    expanded={[0]}
                    animation={true}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}

              />
            </Content>
        </View>
        </View>

    );
  }
}
export default  withTranslation()(TranscationAccordionType);
const styles = StyleSheet.create({
  viewQuick:{
    flex:1,
    flexDirection:'row',
  },
  titleQuick: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    borderStartColor:'#F55753',
  },
  accordionHeaderTextExpanded:{
    fontWeight: 'bold',
    marginHorizontal:10 ,
    color : '#fff',
    fontSize:16,
  },
  accordionHeaderText:{
    fontWeight: 'bold',
    marginHorizontal:10 ,
    fontSize:16,
    textAlign: 'left',
    letterSpacing: 0,
    color: '#575F6B',
    opacity: 1,
  },
  shadowBox:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.46,
    shadowRadius: 15,
    elevation: 10,
  },
  paymentViewExpanded:{
    flexDirection: 'row',
    padding: 20,
    marginBottom:8,
    justifyContent: 'space-between',
    alignItems: 'center' ,
    backgroundColor: '#8F9BAD' ,
    borderRadius:15,
  },
  paymentView:{
    flexDirection: 'row',
    padding: 20,
    marginBottom:5,
    justifyContent: 'space-between',
    alignItems: 'center' ,
    backgroundColor: '#FFFFFF',
    borderRadius:15,
  },
   imageView:{
      backgroundColor:'#F2F2F2',
      borderRadius:20,
      height:36,
      width:36,
      alignItems:'center',
      justifyContent:'center',
   },
   imageViewShadowBox:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.46,
    shadowRadius: 15,
    elevation: 10,
  },
  itemView: {flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'},
  itemContent: {
    padding: 10,
    fontStyle: 'italic',
  },
});
