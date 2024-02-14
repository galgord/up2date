import React from 'react'
import { Pressable } from 'react-native'
import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  SpacingProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  layout,
  position,
  spacing,
  useRestyle,
} from '@shopify/restyle'
import { Theme } from '@app/utils/theme'

// Ensure you have a Theme type defined as per your theme structure

// Combining props for the PressableBox, include other style props as needed
type PressableBoxProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> & {
    onPress?: () => void // Add other native Pressable props as needed
    children?: React.ReactNode // Explicitly including children prop
  }

// Compose restyle functions for all the props you want to use
const restyleFunctions = composeRestyleFunctions<Theme, PressableBoxProps>([
  spacing,
  border,
  backgroundColor,
  layout,
  // @ts-ignore
  position,
])

const PressableBox: React.FC<PressableBoxProps> = ({ onPress, children, ...rest }) => {
  // @ts-ignore
  const props = useRestyle(restyleFunctions, rest)

  return (
    <Pressable {...props} onPress={onPress}>
      {children}
    </Pressable>
  )
}

export default PressableBox
