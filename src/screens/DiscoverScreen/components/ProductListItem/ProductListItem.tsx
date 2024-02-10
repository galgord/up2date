import React from 'react'
import Box from '@app/components/Box'
import Text from '@app/components/Text'
import { ProductListItemProps } from './types'

const ProductListItem: React.FC<ProductListItemProps> = ({ name, starRating }) => (
  <Box backgroundColor="surfaceContainerHighest" p="s" width={140} maxHeight={136} borderRadius="m">
    <Box backgroundColor="primary" height={90} width={120} alignSelf="center" borderRadius="m" />
    <Box flexDirection="row" marginTop="m" justifyContent="space-between">
      <Text variant="body/small">{name}</Text>
      <Box flexDirection="row" alignItems="center">
        <Text variant="label/small">{starRating}</Text>
        <Box width={4} />
        <Text variant="label/small">★</Text>
      </Box>
    </Box>
  </Box>
)

export default ProductListItem
