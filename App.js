import React from 'react';
import { View } from 'react-native';
import styles from './AppStyles';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.blockA}></View>
      <View style={styles.blockB}></View>
      <View style={styles.blockC}></View>
    </View>
  );
}