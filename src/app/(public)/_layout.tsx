import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import Icon from '@app/components/Icon'

export default function PublicLayout() {
  const router = useRouter()

  return (
    <Stack initialRouteName="login">
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
          headerTransparent: true,
          title: 'Login to Refresh',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen name="forgot-password" />
    </Stack>
  )
}
