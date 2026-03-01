import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CustomButton from '../../components/common/CustomButton';

export default function OrdersScreen({ orders, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ORDERS</Text>
      
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>🍕 {item.type} - {item.size}</Text>
            <Text style={styles.orderSubtext}>Amount: {item.amount} | Hore: {item.date}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No exist oreders.</Text>}
      />

      <CustomButton title="EXIT" onPress={onLogout} color="#e70e0e" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#faf8f7', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  orderCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, elevation: 3 },
  orderText: { fontSize: 18, fontWeight: 'bold' },
  orderSubtext: { color: '#666' },
  empty: { textAlign: 'center', marginTop: 50, color: '#888' }
});