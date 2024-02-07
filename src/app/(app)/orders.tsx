import React from 'react'
import Box from '@app/components/Box'
import Button from '@app/components/Button'
import Text from '@app/components/Text'
import { useSessionData } from '@app/state/modules/auth'

const Orders: React.FC = () => {
  const { set: setSession } = useSessionData()
  return (
    <Box flex={1} justifyContent="center">
      <Text>Orders</Text>
      <Button title="Logout" onPress={() => setSession({ token: null })} />
    </Box>
  )
}

export default Orders
