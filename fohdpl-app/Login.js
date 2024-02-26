import React, { useState } from 'react'
import { View,} from "react-native";
import { StyleSheet, Text, Image } from "react-native";
import Logo from '../fohdpl-app/assets/Logo_1.png';
import CustomInput from '../Components/CustomInput/CustomInput'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <View style={style.root}>
        <Image source={Logo} style={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>

        <CustomInput placeholderText="email" 
        value={email} 
        setValue={setEmail} 
        />
        <CustomInput placeholderText="password" 
        value={password} setValue={setPassword} 
        secureTextEntry
        />
      </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth:300,
        height: 100,
    },
});