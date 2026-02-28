import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; // <--- Revisa que StyleSheet esté aquí
export default function CustomButton({ title, onPress, color = '#4CAF50' }) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color }]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});