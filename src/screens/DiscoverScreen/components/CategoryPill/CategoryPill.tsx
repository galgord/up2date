import React from 'react'
import { Pressable } from 'react-native'
import Box from '@app/components/Box'
import PressableBox from '@app/components/PressableBox'
import Text from '@app/components/Text'
import { CategoryPillProps } from './types'

const CategoryPill: React.FC<CategoryPillProps> = ({ onPress, name }) => (
  <PressableBox onPress={onPress} flex={1}>
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
  </PressableBox>
)

export default CategoryPill
