import React, { useRef, useState } from 'react'
import { Animated, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { router, useLocalSearchParams } from 'expo-router'
import Box from '@app/components/Box'
import Icon from '@app/components/Icon'
import PressableBox from '@app/components/PressableBox'
import Text from '@app/components/Text'
import theme from '@app/utils/theme'

const ProductPage: React.FC = () => {
  const { imageUrl, name } = useLocalSearchParams()
  const [isExpanded, setIsExpanded] = useState(false)

  const imageHeight = useRef(new Animated.Value(243)).current // Initial height of the image

  const toggleAnimation = () => {
    if (isExpanded) {
      // If expanded, animate to original state
      Animated.parallel([
        Animated.timing(imageHeight, {
          toValue: 243,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start()
    } else {
      // If not expanded, animate to expanded state
      Animated.parallel([
        Animated.timing(imageHeight, {
          toValue: 0, // Shrink the image completely
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start()
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Animated.View style={{ height: imageHeight, zIndex: -1 }}>
        <PressableBox
          onPress={() => router.back()}
          position="absolute"
          top={16}
          left={16}
          zIndex={1}
          width={40}
          height={40}
          borderRadius="m"
          backgroundColor="secondaryContainer"
          justifyContent="center"
          alignItems="center">
          <Icon name="arrow-left" size={24} />
        </PressableBox>
        <Image
          source={{ uri: imageUrl?.toString() ?? '' }}
          contentFit="cover"
          style={{
            flex: 1,
            zIndex: 0,
            justifyContent: 'flex-end',
            paddingBottom: 32,
            paddingLeft: 16,
          }}>
          <Text variant="display/small" color="onPrimary">
            {name}
          </Text>
        </Image>
      </Animated.View>
      <Pressable onPress={toggleAnimation} disabled={isExpanded} style={{ flex: 1 }}>
        <Animated.ScrollView
          style={{
            marginTop: isExpanded ? 0 : -24,
          }}
          bounces={false}
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingVertical: theme.spacing.l,
            backgroundColor: theme.colors.background,
            borderTopLeftRadius: isExpanded ? 0 : theme.borderRadii.xl,
            borderTopRightRadius: isExpanded ? 0 : theme.borderRadii.xl,
            flexGrow: 1,
          }}>
          {isExpanded ? (
            <Box flexDirection="row" gap="m" alignItems="center">
              <Pressable onPress={toggleAnimation}>
                <Icon name="arrow-left" size={24} />
              </Pressable>
              <Text variant="headline/medium">{name}</Text>
            </Box>
          ) : null}
          <Text variant="body/medium">
            Find the best deals on fresh produce near you! Open from 8:00 am to 8:00 pm
          </Text>
        </Animated.ScrollView>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProductPage
