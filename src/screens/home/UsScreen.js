import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import CustomButton from '../../components/common/CustomButton';

export default function UsScreen({ navigation }) {
  
  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/profile.php?id=100063778031526');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.mainTitle}>SEATTLE ROCK PIZZA</Text>
        <Text style={styles.subtitle}>Sabor y Distorsión</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nuestra Historia</Text>
        <Text style={styles.paragraph}>
          Nuestra esencia nace en las calles de Seattle, cuna del movimiento grunge. Cada una de nuestras pizzas es un tributo a las bandas que definieron una generación con su sonido crudo, auténtico y rebelde. Así como Nirvana, Pearl Jam y Soundgarden revolucionaron la música de los años 90, nosotros buscamos revolucionar el sabor tradicional. Combinamos la intensidad y la energía del rock clásico con ingredientes de la más alta calidad para crear una experiencia que resuena con cada acorde.
        </Text>
      </View>

      <View style={styles.rowContainer}>
        <View style={[styles.card, styles.halfCard]}>
          <Text style={styles.cardTitle}>Misión</Text>
          <Text style={styles.smallParagraph}>
            Ofrecer pizzas con actitud e ingredientes premium, logrando que cada mordida sea un éxito rotundo para nuestros clientes.
          </Text>
        </View>

        <View style={[styles.card, styles.halfCard]}>
          <Text style={styles.cardTitle}>Visión</Text>
          <Text style={styles.smallParagraph}>
            Ser el headliner de las pizzerías a nivel nacional, creando una legión de fans unidos por el buen rock y el gran sabor.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Encuéntranos</Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Sede:</Text> 400 Broad St, Seattle, WA 98109 (Space Needle)
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Teléfono:</Text> +52 432 102 2443
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.boldText}>Email:</Text> pizzeriaseattle@mail.com
        </Text>
        
        <TouchableOpacity style={styles.socialButton} onPress={openFacebook}>
          <Text style={styles.socialButtonText}>Síguenos en Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton title="VOLVER AL MENÚ" onPress={() => navigation.goBack()} color="#1a1a1a" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.creditsLabel}>Desarrollado por:</Text>
        <Text style={styles.creditsNames}>Samuel Vilchis & Evanibaldo Rea</Text>
        <Text style={styles.collegeName}>Orgullosamente Fans de Sonic Youth</Text>
        <Text style={styles.versionText}>Versión 1.00v</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1a1a1a',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfCard: {
    width: '48%',
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: '#4a4a4a',
    textAlign: 'justify',
  },
  smallParagraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4a4a4a',
  },
  infoText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  boldText: {
    fontWeight: 'bold',
  },
  socialButton: {
    backgroundColor: '#1877F2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  socialButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginBottom: 30,
  },
  creditsLabel: {
    fontSize: 14,
    color: '#666',
  },
  creditsNames: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 5,
  },
  collegeName: {
    fontSize: 14,
    color: '#2e7d32',
    fontWeight: 'bold',
    marginTop: 3,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
    marginTop: 10,
  }
});