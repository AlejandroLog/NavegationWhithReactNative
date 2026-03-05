import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import CustomInput from '../../components/common/CustomInput'; 
import CustomButton from '../../components/common/CustomButton';
import { USERS } from '../../data/users';

export default function LoginScreen({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Camp void', 'Add your data.');
      return;
    }

    const userFound = USERS.find(
      (u) => u.username === username.toLowerCase() && u.password === password
    );

    if (userFound) {
      onLoginSuccess();
    } else {
      Alert.alert('Error', 'User or Password Incorrect.');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        
        <View style={styles.headerContainer}>
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>AS</Text> 
          </View>
          <Text style={styles.title}>WElcome</Text>
          <Text style={styles.subtitle}>Sesion init</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>User</Text>
            <CustomInput
              placeholder="User"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
            
            <Text style={styles.label}>Contraseña</Text>
            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              isPassword={true}
              showPassword={showPassword}
              toggleShowPassword={() => setShowPassword(!showPassword)}
            />

            <View style={styles.buttonSpacer}>
              <CustomButton 
                title="Sing In" 
                onPress={handleLogin} 
                color="#2D5AF0"
              />
            </View>
          </View>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#2D5AF0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#2D5AF0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  logoText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '900',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginLeft: 4,
  },
  buttonSpacer: {
    marginTop: 10,
  },
  footerText: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 30,
  },
});