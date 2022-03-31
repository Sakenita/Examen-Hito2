/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './src/screens/pantalla'
import Pantalla2 from './src/screens/pantalla'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      
      <Pantalla2 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default App;
