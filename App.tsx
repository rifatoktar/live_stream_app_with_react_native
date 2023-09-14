import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import AppNavigator from './src/components/app_navigator';
import useFonts from './hooks/useFonts';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }
  return (
    <AppNavigator />
  );
}