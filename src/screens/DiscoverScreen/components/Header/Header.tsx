import React from 'react'
import Box from '@app/components/Box'
import Icon from '@app/components/Icon'
import Text from '@app/components/Text'

const Header: React.FC = () => (
  <Box flexDirection="row" justifyContent="space-between" mx="m">
    <Box flexDirection="row" gap="m" alignItems="center">
      <Icon name="cup" size={24} />
      <Text variant="label/medium">Mar del Plata, 7600</Text>
    </Box>
    <Icon name="cart-outline" size={24} />
  </Box>
)

export default Header
