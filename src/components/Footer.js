import React from 'react';
import {Text, View} from 'react-native';
import styles from '../containers/styles/sharedStyles.js';

export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.sectionDescription}> Sample App @2021.</Text>
    </View>
  );
};
