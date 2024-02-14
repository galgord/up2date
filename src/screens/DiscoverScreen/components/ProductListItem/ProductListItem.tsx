import React from 'react'
import { Pressable } from 'react-native'
import { Image } from 'expo-image'
import Box from '@app/components/Box'
import Text from '@app/components/Text'
import { ProductListItemProps } from './types'

const ProductListItem: React.FC<ProductListItemProps> = ({
  name,
  starRating,
  imageUrl,
  onPress,
}) => (
  <Pressable onPress={onPress}>
    <Box
      backgroundColor="surfaceContainerHighest"
      p="s"
      width={140}
      maxHeight={136}
      borderRadius="m">
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 120, height: 80, borderRadius: 15, alignSelf: 'center' }}
      />
      <Box flexDirection="row" marginTop="m" justifyContent="space-between">
        <Text variant="body/small">{name}</Text>
        <Box flexDirection="row" alignItems="center">
          <Text variant="label/small">{starRating}</Text>
          <Box width={4} />
          <Text variant="label/small">★</Text>
        </Box>
      </Box>
    </Box>
  </Pressable>
)

export default ProductListItem
