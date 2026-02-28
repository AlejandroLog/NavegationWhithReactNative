import React, { useState } from 'react'; // <--- Asegúrate de que { useState } esté aquí
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation/MainNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <MainNavigator 
        isLoggedIn={isLoggedIn} 
        onLoginSuccess={() => setIsLoggedIn(true)} 
        onLogout={() => setIsLoggedIn(false)} 
      />
    </NavigationContainer>
  );
}