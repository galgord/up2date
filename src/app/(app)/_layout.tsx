import 'react-native-gesture-handler'
import { Tabs } from 'expo-router/tabs'

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        // Name of the route to hide.
        name="discover"
      />

      <Tabs.Screen
        // Name of the route to hide.
        name="orders"
      />

      <Tabs.Screen
        // Name of the route to hide.
        name="profile"
      />
    </Tabs>
  )
}
