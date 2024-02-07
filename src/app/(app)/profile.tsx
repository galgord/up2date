import React from 'react'
import { Link } from 'expo-router'
import Box from '@app/components/Box'
import Text from '@app/components/Text'

const Profile: React.FC = () => {
  return (
    <Box flex={1} justifyContent="center">
      <Text>Profile</Text>
      <Link href={'/login'}>Login</Link>
    </Box>
  )
}

export default Profile
