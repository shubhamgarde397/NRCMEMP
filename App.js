import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Starter from './screens/Starter';

export default function App() {
  return (
  <View style={styles.RootScreen}>
    <Starter />
  </View>
  )
}

const styles = StyleSheet.create({
  RootScreen:{
    backgroundColor:'wheat',
    flex:1
  }
})
