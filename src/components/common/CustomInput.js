import React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function CustomInput({ 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry, 
  autoCapitalize,
  isPassword,
  showPassword,
  toggleShowPassword
}) {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword ? !showPassword : secureTextEntry}
          autoCapitalize={autoCapitalize}
          placeholderTextColor="#858585"
        />
        
        {isPassword && (
          <TouchableOpacity 
            onPress={toggleShowPassword} 
            style={styles.iconContainer}
          >
            <Ionicons 
              name={showPassword ? "eye-outline" : "eye-off-outline"} 
              size={22} 
              color="#858585" 
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    color: '#000',
  },
  iconContainer: {
    paddingRight: 15,
    justifyContent: 'center',
  },
});