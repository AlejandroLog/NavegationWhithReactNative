import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

export default function OrdersScreen({ orders, onLogout }) {
    const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.cardMain}>
        <View style={styles.pizzaInfo}>
          <Text style={styles.pizzaTypeText}>{item.type.toUpperCase()}</Text>
          <Text style={styles.pizzaSizeText}>{item.size} - Count: {item.amount}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.totalText}>${item.amount * (item.size === 'Large' ? 150 : 120)}</Text>
          <View style={styles.statusBadge}>
          </View>
        </View>
      </View>
      
      <View style={styles.cardFooter}>
        <Text style={styles.timeText}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.brandText}>Staff Portal</Text>
            <Text style={styles.headerTitle}>Orders List</Text>
          </View>
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{orders.length}</Text>
          </View>
        </View>
        
        <View style={styles.animationWrapper}>
          <LottieView
            source={require('../../../assets/animations/zzz.json')}
            autoPlay
            loop
            style={styles.listAnimation}
          />
        </View>
      </View>
      
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="clipboard-outline" size={50} color="#D1D5DB" />
            <Text style={styles.emptyTitle}>No orders active</Text>
          </View>
        }
      />

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.exitCard} 
          onPress={onLogout}
        >
          <View style={styles.exitContent}>
            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
            <Text style={styles.exitText}>LOGOUT SYSTEM</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  headerSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandText: { fontSize: 10, fontWeight: '800', color: '#2D5AF0', textTransform: 'uppercase' },
  headerTitle: { fontSize: 24, fontWeight: '900', color: '#111827' },
  countBadge: { 
    backgroundColor: '#2D5AF0', 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 12 
  },
  countText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  animationWrapper: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listAnimation: { width: 120, height: 120 },
  listContent: { padding: 20 },
  
  orderCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  cardMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  pizzaInfo: { flex: 1 },
  pizzaTypeText: { fontSize: 16, fontWeight: '800', color: '#111827' },
  pizzaSizeText: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  priceContainer: { alignItems: 'flex-end' },
  totalText: { fontSize: 16, fontWeight: '900', color: '#2D5AF0' },
  statusBadge: { 
    backgroundColor: '#EBF2FF', 
    paddingHorizontal: 6, 
    paddingVertical: 2, 
    borderRadius: 4, 
    marginTop: 5 
  },
  statusText: { fontSize: 9, fontWeight: '900', color: '#2D5AF0' },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F9FAFB',
  },
  orderIdText: { fontSize: 11, color: '#9CA3AF', fontWeight: '600' },
  timeText: { fontSize: 11, color: '#9CA3AF' },
  
  emptyContainer: { 
    alignItems: 'center', 
    marginTop: 50 },
  emptyTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#D1D5DB', 
    marginTop: 10 
  },
  footer: { 
    padding: 20 
  },
  exitCard: { 
    backgroundColor: '#FFF', 
    borderWidth: 1, 
    borderColor: '#FEE2E2', 
    borderRadius: 10, 
    padding: 12 
  },
  exitContent: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 8 
  },
  exitText: { 
    fontSize: 13, 
    fontWeight: '800', 
    color: '#EF4444' 
  },
});