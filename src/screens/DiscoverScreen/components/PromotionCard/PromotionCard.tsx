import React, { useState } from 'react'
import { LayoutChangeEvent } from 'react-native'
import { Image } from 'expo-image'
import Box from '@app/components/Box'
import Text from '@app/components/Text'

const PromotionCard: React.FC = () => {
  const [contentWidth, setContentWidth] = useState(0)

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    setContentWidth(width)
  }

  return (
    <Box py="l" px="m" backgroundColor="cardBackground" borderRadius="l" onLayout={onLayout}>
      <Box
        position="absolute"
        width={contentWidth / 2}
        height={48}
        left={0}
        top={24}
        justifyContent="center"
        alignItems="center"
        backgroundColor="primary80"
        borderTopEndRadius="l"
        borderBottomEndRadius="l">
        <Text variant="headline/medium" textAlign="center">
          50% OFF
        </Text>
      </Box>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box alignSelf="flex-end">
          <Text variant="body/medium">Find great deals on </Text>
          <Text variant="body/medium">fresh products</Text>
        </Box>
        {/* <Image
          source={{
            uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F23284%2Ffrench-bread-rolls-to-die-for%2F&psig=AOvVaw23OZNtcBJCOVMjOE2BaYob&ust=1707571336389000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNi6pYmtnoQDFQAAAAAdAAAAABAE',
          }}
          style={{ width: 100, height: 100 }}
        /> */}
        <Box width={100} height={100} backgroundColor="background" borderRadius="l" />
      </Box>
    </Box>
  )
}
export default PromotionCard
