import { Button, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen({navigation}) {
    return (
        <View>
            <Text style={styles.container}>
            Welcome Friends of the Hoover Durant Public Library!
            </Text>
            <Button
                title="Sign up!"
                onPress={() =>
                    navigation.navigate('Login')
                }
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