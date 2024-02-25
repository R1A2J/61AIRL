import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome Friends of the Hoover Durant Public Library!</Text>
      <Button
        title = "Sign up!"
        onPress={Login.js}
      />
      <StatusBar style="auto" />
      {/* <div>
        <Welcome />
      </div> */}
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
