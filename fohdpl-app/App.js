import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Welcome"
          component={WelcomeScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
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
