import React, { useMemo } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import * as VectorIcons from '@expo/vector-icons'
import {
  BackgroundColorProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  SpacingProps,
  backgroundColor,
  border,
  color,
  composeRestyleFunctions,
  layout,
  spacing,
  useRestyle,
  useTheme,
} from '@shopify/restyle'
import { Theme } from '@app/utils/theme'
import Box from '../Box/Box'
import Icon from '../Icon'
import { InputProps } from './types'

type RestyleProps = LayoutProps<Theme> & BackgroundColorProps<Theme> & BorderProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColor,
  layout,
  border,
])

type TextInputPropsExtended = RestyleProps & TextInputProps

const TextField: React.FC<TextInputPropsExtended> = ({ ...rest }) => {
  const props = useRestyle(restyleFunctions, rest)

  return <TextInput {...props} {...rest} />
}

const Input: React.FC<InputProps> = ({ leftIcon, rightIcon, ...otherProps }) => {
  const theme = useTheme<Theme>()
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      borderWidth={1}
      borderColor="gray"
      paddingHorizontal={'l'}
      borderRadius={'xs'}>
      {leftIcon?.name && (
        <Box marginRight={'m'}>
          <Icon name={leftIcon.name} size={leftIcon.size} color={leftIcon.color} />
        </Box>
      )}
      <TextField
        flex={1}
        {...otherProps}
        borderWidth={0}
        minHeight={58}
        placeholderTextColor={theme.colors.gray}
      />
      {rightIcon?.name && (
        <Box marginRight={'m'}>
          <Icon name={rightIcon.name} size={rightIcon.size} color={rightIcon.color} />
        </Box>
      )}
    </Box>
  )
}

export default Input
