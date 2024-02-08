import React from 'react'
import { Pressable } from 'react-native'
import Box from '@app/components/Box'
import Text from '@app/components/Text'
import { CategoryHeaderProps } from './types'

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ headerText, onSeeAllPress }) => (
  <Box flexDirection="row" justifyContent="space-between" alignItems="center">
    <Text variant="title/large">{headerText}</Text>
    <Pressable onPress={onSeeAllPress}>
      <Text variant="label/large" color="primary">
        See all
      </Text>
    </Pressable>
  </Box>
)

export default CategoryHeader
