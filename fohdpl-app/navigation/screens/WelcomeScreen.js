import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style = {{fontWeight: 'bold', fontSize: 26}}>
            Welcome Friends of the Hoover Durant Public Library!
            </Text>
            <Button
                title="Sign up!"
                onPress={() =>
                    navigation.navigate(loginName)
                }></Button>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
v  