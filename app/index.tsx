import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import BusinessCardScreen from '../components/BusinessCard/BusinessCardScreen';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  // Load the framework ready hook
  useFrameworkReady();

  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-Bold': Inter_700Bold,
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Return null while fonts are loading
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <BusinessCardScreen />;
}