import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';

// Importaciones directas (sin usar index.js)
import CustomInput from '../../components/common/CustomInput'; 
import CustomButton from '../../components/common/CustomButton';

import { USERS } from '../../data/users';

export default function LoginScreen({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Buscamos en la data (esto se queda igual por ahora)
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>
      </View>

      <View style={styles.formContainer}>
        <CustomInput
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        
        <CustomInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} 
        />

        <CustomButton 
          title="Iniciar Sesión" 
          onPress={handleLogin} 
          color="#4CAF50" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    color: '#6C757D',
    marginTop: 5,
  },
  formContainer: {
    width: '100%',
  },
});