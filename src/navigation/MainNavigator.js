import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import OrdersScreen from '../screens/home/OrdersScreen';
import CustomerScreen from '../screens/home/CustomerScreen';
import UsScreen from '../screens/home/UsScreen';
import CreateOrder from '../screens/home/CreateOrder';
import MenuScreen from '../screens/home/MenuScreen';

const Stack = createNativeStackNavigator();

export const MainNavigator = ({ isLoggedIn, onLoginSuccess, onLogout }) => {
  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} onLoginSuccess={onLoginSuccess} />}
        </Stack.Screen>
      ) : (
        // Usamos un Fragment <></> para agrupar las pantallas cuando está logueado
        <>
          <Stack.Screen name="Home" options={{ title: 'Menú Principal' }}>
            {(props) => <HomeScreen {...props} onLogout={onLogout} />}
          </Stack.Screen>
          
          <Stack.Screen 
            name="Orders" 
            component={OrdersScreen} 
            options={{ title: 'Pedidos' }} 
          />
          
          <Stack.Screen name="Customer" options={{ title: 'Clientes' }}>
          {(props) => <CustomerScreen {...props} onLogout={onLogout} />}
          </Stack.Screen>
          
          <Stack.Screen 
            name="Us" 
            component={UsScreen} 
            options={{ title: 'Nosotros' }} 
          />
          <Stack.Screen 
            name="CreateOrder" 
            component={CreateOrder}
            options={{ title: 'Crear Pedido' }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{ title: 'Menú' }}
          />

        </>
      )}
    </Stack.Navigator>
  );
};