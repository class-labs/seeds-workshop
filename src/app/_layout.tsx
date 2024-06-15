import { SplashScreen, Stack } from 'expo-router';

import { AppProvider } from '../providers/AppProvider';

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AppProvider onInitialized={() => SplashScreen.hideAsync()}>
      <Stack
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </AppProvider>
  );
}
