import React from 'react'
import { Pressable } from 'react-native'
import Box from '@app/components/Box'
import Text from '@app/components/Text'
import { CategoryPillProps } from './types'

const CategoryPill: React.FC<CategoryPillProps> = ({ onPress, name }) => (
  <Pressable onPress={onPress} style={{ flex: 1 }}>
    <Box
      py="m"
      backgroundColor="surface"
      justifyContent="center"
      alignItems="center"
      gap="s"
      borderRadius="xl"
      flexDirection="row">
      <Text variant="label/large" color="primary">
        +
      </Text>
      <Text variant="label/large" color="primary">
        {name}
      </Text>
    </Box>
  </Pressable>
)

export default CategoryPill
