import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/common/CustomButton';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MENU</Text>
      
      <View style={styles.menuList}>
        <Text style={styles.menuItem}>HAWAIANA............. $120CH $150G</Text>
        <Text style={styles.menuItem}>CUBANA................ $120CH $150G</Text>
        <Text style={styles.menuItem}>PEPERONI............ $120CH $160G</Text>
      </View>

      <View style={styles.exitContainer}>
        <CustomButton 
          title="EXIT" 
          onPress={() => navigation.goBack()} 
          color="#f0ba92" // Un color similar al de tu diseño
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000',
  },
  menuList: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 60,
  },
  menuItem: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
  },
  exitContainer: {
    width: '40%',
  }
});