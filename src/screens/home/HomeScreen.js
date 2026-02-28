import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/common/CustomButton';

export default function HomeScreen({ navigation, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>MENU PRINCIPAL</Text>

      <View style={styles.menuContainer}>
        <CustomButton 
          title="Employed" 
          onPress={() => navigation.navigate('Orders')} 
          color="#A1B0F8" 
        />
        
        <CustomButton 
          title="Customer" 
          onPress={() => navigation.navigate('Customer')} 
          color="#A1B0F8" 
        />
        
        <CustomButton 
          title="US" 
          onPress={() => navigation.navigate('Us')} 
          color="#A1B0F8" 
        />
      </View>

      <View style={styles.exitContainer}>
        <CustomButton 
          title="EXIT" 
          onPress={onLogout} 
          color="#e70f0f"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfd',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '500',
    color: '#000',
    marginBottom: 60,
  },
  menuContainer: {
    width: '100%',
    gap: 20, 
    flex: 1,
    justifyContent: 'center',
  },
  exitContainer: {
    width: '50%', 
    marginBottom: 50,
  }
});