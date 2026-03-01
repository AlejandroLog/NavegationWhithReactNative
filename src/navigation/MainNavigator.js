import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import OrdersScreen from '../screens/home/OrdersScreen';
import CustomerScreen from '../screens/home/CustomerScreen';
import UsScreen from '../screens/home/UsScreen';
import CreateOrder from '../screens/home/CreateOrder';
import MenuScreen from '../screens/home/MenuScreen';

const Stack = createNativeStackNavigator();

export const MainNavigator = ({ isLoggedIn, onLoginSuccess, onLogout, orders, addOrder }) => {
  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} onLoginSuccess={onLoginSuccess} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="Home" options={{ title: 'Menú Principal' }}>
            {(props) => <HomeScreen {...props} onLogout={onLogout} />}
          </Stack.Screen>
          
          
          <Stack.Screen name="Orders" options={{ title: 'Pedidos' }}>
            {(props) => <OrdersScreen {...props} orders={orders} onLogout={onLogout} />}
          </Stack.Screen>
          
          <Stack.Screen name="Customer" options={{ title: 'Clientes' }}>
            {(props) => <CustomerScreen {...props} onLogout={onLogout} />}
          </Stack.Screen>
          
          <Stack.Screen 
            name="Us" 
            component={UsScreen} 
            options={{ title: 'Nosotros' }} 
          />

          <Stack.Screen name="CreateOrder" options={{ title: 'Crear Pedido' }}>
            {(props) => (
              <CreateOrder 
                {...props} 
                addOrder={addOrder} 
                onLogout={onLogout} 
              />
            )}
          </Stack.Screen>

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