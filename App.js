import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation/MainNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <NavigationContainer>
      <MainNavigator 
        isLoggedIn={isLoggedIn} 
        onLoginSuccess={() => setIsLoggedIn(true)} 
        onLogout={() => setIsLoggedIn(false)}
        orders={orders}
        addOrder={addOrder}
      />
    </NavigationContainer>
  );
}