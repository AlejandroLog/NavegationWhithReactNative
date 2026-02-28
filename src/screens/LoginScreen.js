import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { USERS } from '../data/users';

export default function LoginScreen({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const userFound = USERS.find(
      (u) => u.username === username.toLowerCase() && u.password === password
    );

    if (userFound) {
      onLoginSuccess();
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View>
      <Text>Iniciar Sesión</Text>
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      /> 
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} 
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}