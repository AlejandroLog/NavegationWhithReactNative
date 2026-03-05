import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

export default function CustomerScreen({ navigation, onLogout }) {
  
  const MenuCard = ({ title, icon, onPress, color }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.cardLeftContent}>
        <View style={[styles.iconBadge, { backgroundColor: color }]}>
          <Ionicons name={icon} size={22} color="#FFF" />
        </View>
        <Text style={styles.cardText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#D1D5DB" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        
        <View style={styles.header}>
          <View>
            <Text style={styles.brandText}>Customer Area</Text>
            <Text style={styles.headerTitle}>Order Terminal</Text>
          </View>
          <View style={styles.pizzaBadge}>
            <Ionicons name="pizza" size={20} color="#F59E0B" />
          </View>
        </View>

        <View style={styles.animationContainer}>
          <LottieView
            source={require('../../../assets/animations/chef.json')}
            autoPlay
            loop
            style={styles.chefAnimation}
          />
        </View>

        <View style={styles.menuWrapper}>
          <Text style={styles.sectionLabel}>CLIENT SERVICES</Text>
          
          <MenuCard 
            title="View Menu" 
            icon="book-outline" 
            onPress={() => navigation.navigate('Menu')} 
            color="#F59E0B"
          />
          
          <MenuCard 
            title="Place New Order" 
            icon="cart-outline" 
            onPress={() => navigation.navigate('CreateOrder')} 
            color="#10B981"
          />

          <TouchableOpacity 
            style={[styles.card, styles.exitCard]} 
            onPress={onLogout}
          >
            <View style={styles.cardLeftContent}>
              <View style={styles.exitIconBadge}>
                <Ionicons name="log-out" size={22} color="#EF4444" />
              </View>
              <Text style={[styles.cardText, { color: '#EF4444' }]}>EXIT SYSTEM</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    marginVertical: 10,
  },
  chefAnimation: {
    width: '100%',
    height: '100%',
  },
  brandText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#F59E0B',
    textTransform: 'uppercase',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
  },
  pizzaBadge: {
    backgroundColor: '#FEF3C7',
    padding: 8,
    borderRadius: 12,
  },
  menuWrapper: {
    gap: 8,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9CA3AF',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 5,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  exitCard: {
    marginTop: 20,
    borderColor: '#FEE2E2',
    backgroundColor: '#FFF5F5',
  },
  cardLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitIconBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  footerText: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 11,
    marginTop: 40,
  },
});