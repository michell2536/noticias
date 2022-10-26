import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SegurancaProvider } from './src/contexts/Seguranca';
import AppRoutes from './AppRoutes';
import { NewsProvider } from './src/contexts/News';

export default function App() {
  return (
    <>
      <SegurancaProvider>
        <NewsProvider>
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </NewsProvider>
      </SegurancaProvider>
      <StatusBar style="auto" />
    </>

  );
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    // justifyContent: 'center',
  },
});
