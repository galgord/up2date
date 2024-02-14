import React from 'react'
import { Pressable } from 'react-native'
import Box from '@app/components/Box'
import Icon from '@app/components/Icon'
import Text from '@app/components/Text'
import { addressBottomSheetModalRef } from '../AddressBottomSheet/AddressBottomSheet'

const Header: React.FC = () => {
  const handleAddressPress = () => {
    console.log('Address pressed')
    addressBottomSheetModalRef.current?.present()
  }
  return (
    <Box flexDirection="row" justifyContent="space-between" mx="m">
      <Box flexDirection="row" gap="m" alignItems="center">
        <Icon name="map-marker" size={24} />
        <Pressable onPress={handleAddressPress}>
          <Text variant="label/medium">Mar del Plata, 7600</Text>
        </Pressable>
      </Box>
      <Icon name="cart-outline" size={24} />
    </Box>
  )
}

export default Header
