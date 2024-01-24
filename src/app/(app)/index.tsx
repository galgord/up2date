import { Box, Button, Text } from '@Components/common';
import { useSession } from '@Utils/ctx';
import React from 'react'

const Home: React.FC = () => {
  const { signOut } = useSession();
  return (
    <Box flex={1} justifyContent='center'>
      <Text>Home</Text>
      <Button
        title='Logout'
        onPress={signOut}
      />
    </Box>
  )
}

export default Home