import { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'

import Home from '@/screens/Home';



export default function App() {

  const SplashScreenHide = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreenHide();
    }, 3000);
  }, []);

  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
