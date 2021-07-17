import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Clicker from './components/Clicker';
import { useSelector, useDispatch, Provider } from 'react-redux';
import store from "./redux/configureStore"

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const value = useSelector(state => state.counter.value)

  return (
    <View style={styles.container}>
      <Text>Total value is {value}</Text>
      <Clicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
