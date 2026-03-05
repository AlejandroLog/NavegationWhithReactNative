import React, { useState } from 'react';
import { 
  View, Text, Alert, StyleSheet, KeyboardAvoidingView, 
  Platform, ScrollView 
} from 'react-native';
import LottieView from 'lottie-react-native'; 
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import { USERS } from '../../data/users';

export default function LoginScreen({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('empty', 'add your username and password');
      return;
    }

    const userFound = USERS.find(
      (u) => u.username === username.toLowerCase() && u.password === password
    );

    if (userFound) {
      onLoginSuccess();
    } else {
      Alert.alert('Error', 'user or password is incorrect');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        
        <View style={styles.headerContainer}>
          <LottieView
            source={require('../../../assets/animations/pizza.json')}            autoPlay
            loop
            style={styles.lottiePizza}
          />
          <Text style={styles.title}>Pizza Seatle</Text>
          <Text style={styles.subtitle}>¡Welcome!</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.formContainer}>
            <Text style={styles.label}>User</Text>
            <CustomInput
              placeholder="Write your username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
            
            <Text style={styles.label}>Contraseña</Text>
            <CustomInput
              placeholder="Write your password"
              value={password}
              onChangeText={setPassword}
              isPassword={true}
              showPassword={showPassword}
              toggleShowPassword={() => setShowPassword(!showPassword)}
            />

            <View style={styles.buttonSpacer}>
              <CustomButton
                title="Enter"
                onPress={handleLogin}
                color="#E63946"
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
    backgroundColor: '#F8F9FA',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  lottiePizza: {
    width: 180,
    height: 180,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1D3557',
    marginTop: -10,
  },
  subtitle: {
    fontSize: 16,
    color: '#457B9D',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1D3557',
    marginBottom: 8,
  },
  buttonSpacer: {
    marginTop: 15,
  },
});