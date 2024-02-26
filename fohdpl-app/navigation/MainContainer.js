import * as React from 'react';
import { View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SimpleLineIcons} from 'react-native-vector-icons/Ionicons'

//Screens
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';

const welcomeName = 'Welcome';
const loginName = 'Login';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName={welcomeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if (rn == welcomeName) {
                        iconName = focused ? 'home' : 'home'
                    } else if (rn == loginName) {
                        iconName = focused ? 'login' : 'logout'
                    }
                    return <Ionicons name 
                }
            })}>
          <Stack.Screen
            name = "Welcome"
            component={WelcomeScreen}
            <View style={styles.container}>
              <Text>Welcome Friends of the Hoover Durant Public Library!</Text>
              <Button
                title = "Sign up!"
                onPress={Login.js}>
              </Button>
            </View> 
        </Tab.Navigator>
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