/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header, UsersFlex, Apper} from './NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'primary';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <UsersFlex />
        <Apper />
        {/* <LearnMoreLinks /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
