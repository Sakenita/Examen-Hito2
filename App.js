/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/pantalla'
import Pantalla2 from './src/screens/pantalla2'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Pantalla2" component={Pantalla2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;