import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
  
  const PizzaItem = ({ name, description, priceS, priceL }) => (
    <View style={styles.pizzaCard}>
      <View style={styles.pizzaInfo}>
        <View style={styles.iconContainer}>
          <Ionicons name="pizza" size={24} color="#F59E0B" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.pizzaName}>{name}</Text>
          <Text style={styles.pizzaDescription}>{description}</Text>
        </View>
      </View>
      
      <View style={styles.priceRow}>
        <View style={styles.priceBadge}>
          <Text style={styles.sizeText}>SMALL</Text>
          <Text style={styles.priceText}>${priceS}</Text>
        </View>
        <View style={[styles.priceBadge, styles.priceBadgeActive]}>
          <Text style={styles.sizeText}>LARGE</Text>
          <Text style={styles.priceText}>${priceL}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerSubtitle}>Freshly Baked</Text>
          <Text style={styles.headerTitle}>Pizza Menu</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.menuList}>
          <PizzaItem 
            name="HAWAIIAN" 
            description="Ham, pineapple, and extra mozzarella cheese."
            priceS="120" 
            priceL="150" 
          />
          <PizzaItem 
            name="CUBAN" 
            description="Pulled pork, ham, mustard, and pickles."
            priceS="120" 
            priceL="150" 
          />
          <PizzaItem 
            name="PEPPERONI" 
            description="Crispy pepperoni with our signature tomato sauce."
            priceS="120" 
            priceL="160" 
          />
        </View>

        <TouchableOpacity 
          style={[styles.exitCard]} 
          onPress={() => navigation.goBack()}
        >
          <View style={styles.exitContent}>
            <View style={styles.exitIconBadge}>
              <Ionicons name="arrow-back" size={20} color="#EF4444" />
            </View>
            <Text style={styles.exitText}>BACK TO MENU</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#F59E0B',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#111827',
  },
  divider: {
    width: 50,
    height: 4,
    backgroundColor: '#F59E0B',
    marginTop: 10,
    borderRadius: 2,
  },
  menuList: {
    gap: 20,
  },
  pizzaCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  pizzaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 12,
  },
  iconContainer: {
    backgroundColor: '#FFFBEB',
    padding: 10,
    borderRadius: 12,
  },
  pizzaName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1F2937',
  },
  pizzaDescription: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  priceRow: {
    flexDirection: 'row',
    gap: 10,
  },
  priceBadge: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  priceBadgeActive: {
    backgroundColor: '#314369',
  },
  sizeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#9CA3AF',
    marginBottom: 2,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
  },
  priceBadgeActive: {
    flex: 1,
    backgroundColor: '#111827',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  exitCard: {
    marginTop: 40,
    backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: '#FEE2E2',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  exitContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  exitIconBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#EF4444',
  },
});

styles.priceTextActive = { color: '#FFF' };
styles.sizeTextActive = { color: '#9CA3AF' };