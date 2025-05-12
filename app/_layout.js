import { Slot } from 'expo-router';
import { useState, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const data = await AsyncStorage.getItem('user');
      if (data) {
        setIsLoggedIn(true);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Slot />
    </AuthContext.Provider>
  );
}
