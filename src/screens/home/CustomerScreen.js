import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/common/CustomButton';

export default function CustomerScreen({ navigation, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>SECCIÓN CLIENTES</Text>

      <View style={styles.menuContainer}>
        <CustomButton 
          title="Menu" 
          onPress={() => navigation.navigate('Menu')} 
          color="#A1B0F8" 
        />
        
        <CustomButton 
          title="Order" 
          onPress={() => navigation.navigate('CreateOrder')} 
          color="#A1B0F8" 
        />
      </View>

      <View style={styles.exitContainer}>
        <CustomButton 
          title="EXIT" 
          onPress={onLogout} 
          color="#f01a0b" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f7', 
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 60,
  },
  menuContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  exitContainer: {
    width: '60%',
    marginBottom: 50,
  }
});