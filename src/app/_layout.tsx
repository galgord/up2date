import { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from '@shopify/restyle'
import 'expo-dev-client'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { init } from '@app/services'
import AppState from '@app/state/context'
import theme from '@app/utils/theme'

function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="(app)" />
        <Stack.Screen name="(public)" />
        <Stack.Screen name="(global)" />
      </Stack>
    </GestureHandlerRootView>
  )
}

export default function App() {
  const [appIsReady, setappIsReady] = useState(false)

  const [fontsLoaded] = useFonts({
    'MontserratAlternates-Regular': require('../../assets/fonts/MontserratAlternates-Regular.ttf'),
    'MontserratAlternates-Medium': require('../../assets/fonts/MontserratAlternates-Medium.ttf'),
    'MontserratAlternates-SemiBold': require('../../assets/fonts/MontserratAlternates-SemiBold.ttf'),
    'MontserratAlternates-Bold': require('../../assets/fonts/MontserratAlternates-Bold.ttf'),
  })

  useEffect(function onMount() {
    init().then(() => {
      setappIsReady(true)
    })
  }, [])

  if (!fontsLoaded || !appIsReady) {
    return <ActivityIndicator />
  }

  return (
    <ThemeProvider theme={theme}>
      <AppState.Provider loadingComponent={<ActivityIndicator />}>
        <RootLayout />
      </AppState.Provider>
    </ThemeProvider>
  )
}
