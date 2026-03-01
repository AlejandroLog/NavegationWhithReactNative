import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../../components/common/CustomButton';

export default function CreateOrder({ navigation, addOrder, onLogout }) {
  const [type, setType] = useState('HAWAIANA');
  const [size, setSize] = useState('CH');
  const [amount, setAmount] = useState('1');

  const getUnitPrice = () => {
    if (type === 'HAWAIANA' || type === 'CUBANA') {
      return size === 'CH' ? 120 : 150;
    }
    if (type === 'PEPERONI') {
      return size === 'CH' ? 120 : 160;
    }
    return 0;
  };

  const unitPrice = getUnitPrice();
  const totalPrice = unitPrice * parseInt(amount);

  const handleSave = () => {
    const newOrder = {
      id: Date.now().toString(),
      type,
      size,
      amount,
      total: totalPrice,
      date: new Date().toLocaleTimeString()
    };
    
    addOrder(newOrder); 
    Alert.alert("Éxito", `Orden registrada: $${totalPrice}`);
    navigation.navigate('Home');
  };

  return (
    <ScrollView 
      style={styles.mainContainer} 
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>NEW ORDER</Text>

      <Text style={styles.label}>Type Pizza:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={type} onValueChange={(item) => setType(item)}>
          <Picker.Item label="Hawaiana" value="HAWAIANA" />
          <Picker.Item label="Cubana" value="CUBANA" />
          <Picker.Item label="Peperoni" value="PEPERONI" />
        </Picker>
      </View>

      <Text style={styles.label}>Size:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={size} onValueChange={(item) => setSize(item)}>
          <Picker.Item label={`Smile - $${type === 'PEPERONI' ? 120 : 120}`} value="CH" />
          <Picker.Item label={`Big - $${type === 'PEPERONI' ? 160 : 150}`} value="G" />
        </Picker>
      </View>

      <Text style={styles.label}>Amount:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={amount} onValueChange={(item) => setAmount(item)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
            <Picker.Item key={n} label={n.toString()} value={n.toString()} />
          ))}
        </Picker>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>TOTAL:</Text>
        <Text style={styles.totalAmount}>${totalPrice}.00</Text>
      </View>

      <View style={styles.buttonRow}>
        <CustomButton title="SAVE" onPress={handleSave} color="#4CAF50" />
        <CustomButton title="EXIT" onPress={onLogout} color="#ec1111" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    backgroundColor: '#faf8f7',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40, 
  },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  label: { fontSize: 16, fontWeight: '600', marginTop: 5 },
  pickerContainer: { 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    marginVertical: 0, 
    borderWidth: 1, 
    borderColor: '#ddd',
  },
  totalContainer: {
    backgroundColor: '#e7e1e1',
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#24d12a',
    borderStyle: 'dashed'
  },
  totalLabel: { fontSize: 14, color: '#666', fontWeight: 'bold' },
  totalAmount: { fontSize: 32, fontWeight: 'bold', color: '#2E7D32' },
  buttonRow: { marginTop: 15, gap: 10 }
});