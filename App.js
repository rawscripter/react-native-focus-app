import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Focus } from './src/features/focus/Focus';
export default function App() {
  const [focusSubjet, setFocusSubjet] = useState('Hello world');

  return (
    <View style={styles.container}>
      <Focus addSubject={setFocusSubjet}></Focus>
      <Text style={styles.textTitle}>{focusSubjet}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
  },
});
