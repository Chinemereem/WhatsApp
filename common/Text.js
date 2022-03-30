import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../NewAppScreen/components/Colors';

const HeaderText = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 15,
    color: Colors.titleColor,
    fontFamily: 'Cochin',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
  },
});
export default HeaderText;
