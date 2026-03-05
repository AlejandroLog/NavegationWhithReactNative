import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrdersScreen({ orders, onLogout }) {
  
  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <View style={styles.orderIdContainer}>
          <Text style={styles.orderIdText}>#{item.id.substring(0, 5)}</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>IN PREPARATION</Text>
        </View>
      </View>

      <View style={styles.orderDetails}>
        <View style={styles.pizzaIconContainer}>
          <Ionicons name="pizza" size={24} color="#2D5AF0" />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.pizzaTypeText}>{item.type.toUpperCase()}</Text>
          <Text style={styles.pizzaSizeText}>{item.size} Size</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountLabel}>QTY</Text>
          <Text style={styles.amountValue}>{item.amount}</Text>
        </View>
      </View>

      <View style={styles.orderFooter}>
        <View style={styles.timeContainer}>
          <Ionicons name="time-outline" size={14} color="#6B7280" />
          <Text style={styles.timeText}>{item.date}</Text>
        </View>
        <Text style={styles.totalText}>Total: ${item.amount * (item.size === 'Large' ? 150 : 120)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.brandText}>Staff Portal</Text>
          <Text style={styles.headerTitle}>Active Orders</Text>
        </View>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{orders.length}</Text>
        </View>
      </View>
      
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="clipboard-outline" size={60} color="#D1D5DB" />
            <Text style={styles.emptyTitle}>No orders yet</Text>
            <Text style={styles.emptySubtitle}>Active orders will appear here.</Text>
          </View>
        }
      />

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.exitCard} 
          onPress={onLogout}
        >
          <View style={styles.exitContent}>
            <View style={styles.exitIconBadge}>
              <Ionicons name="log-out" size={20} color="#EF4444" />
            </View>
            <Text style={styles.exitText}>EXIT SYSTEM</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 15,
  },
  brandText: { 
    fontSize: 12,
    fontWeight: '700', 
    color: '#2D5AF0', 
    textTransform: 'uppercase' 
    },
  headerTitle: {
    fontSize: 26, 
    fontWeight: 'bold',
    color: '#111827' 
    },
  countBadge: { 
    backgroundColor: '#2D5AF0', 
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center'
    },
  countText: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  listContent: { 
    paddingHorizontal: 20, 
    paddingBottom: 20 
  },
  orderCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  orderHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 12 
  },
  orderIdContainer: { 
    backgroundColor: '#F3F4F6', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 6 
  },
  orderIdText: { 
    fontSize: 12, 
    fontWeight: '700', 
    color: '#6B7280' 
  },
  statusBadge: { 
    backgroundColor: '#DBEAFE', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 6 
  },
  statusText: { 
    fontSize: 10, 
    fontWeight: '800', 
    color: '#1E40AF' 
  },
  orderDetails: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  pizzaIconContainer: { 
    backgroundColor: '#EFF6FF', 
    padding: 10, 
    borderRadius: 12, 
    marginRight: 12 
  },
  infoContainer: { 
    flex: 1 
  },
  pizzaTypeText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#111827' 
  },
  pizzaSizeText: { 
    fontSize: 14, 
    color: '#6B7280' 
  },
  amountContainer: { 
    alignItems: 'center', 
    paddingLeft: 15, 
    borderLeftWidth: 1, 
    borderLeftColor: '#F3F4F6' 
  },
  amountLabel: { 
    fontSize: 10, 
    color: '#9CA3AF', 
    fontWeight: '700' 
  },
  amountValue: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#2D5AF0' 
  },
  orderFooter: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    borderTopWidth: 1, 
    borderTopColor: '#F9FAFB', 
    paddingTop: 10 
  },
  timeContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 4 
  },
  timeText: { 
    fontSize: 12, 
    color: '#6B7280' 
  },
  totalText: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: '#111827' 
  },
  emptyContainer: { 
    alignItems: 'center', 
    marginTop: 100 
  },
  emptyTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#4B5563', 
    marginTop: 10 
  },
  emptySubtitle: { 
    color: '#9CA3AF', 
    marginTop: 5 
  },
  footer: { 
    paddingHorizontal: 20, 
    paddingBottom: 20 
  },
  exitCard: { 
    backgroundColor: '#FFF5F5', 
    borderWidth: 1,
    borderColor: '#FEE2E2', 
    borderRadius: 12, 
    padding: 14
    },
  exitContent: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 12 
  },
  exitIconBadge: { 
    width: 32, 
    height: 32, 
    borderRadius: 8, 
    backgroundColor: '#FEE2E2', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  exitText: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: '#EF4444' 
  },
});