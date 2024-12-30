/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import './global.css';
import ProductsScreen from './screen/ProductsScreen';

function App(): React.JSX.Element {
  return (
    <View style={styles.Container}>
      <ProductsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {},
});

export default App;
