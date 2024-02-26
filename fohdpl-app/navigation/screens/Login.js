import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle sign-in logic here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Login;