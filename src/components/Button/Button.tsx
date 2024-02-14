import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps, Pressable, StyleSheet } from 'react-native'
import * as VectorIcons from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@app/utils/theme'
import Box from '../Box/Box'
import Text from '../Text/Text'
import { ButtonProps } from './types'
import { variantStyles } from './variants'

const ThemedActivityIndicator: React.FC<
  ActivityIndicatorProps & { colorKey?: keyof Theme['colors'] }
> = ({ colorKey, ...rest }) => {
  const theme = useTheme<Theme>()
  const color = colorKey ? theme.colors[colorKey] : theme.colors.white

  return <ActivityIndicator color={color} {...rest} />
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  style,
  loading,
  variant = 'primary',
  ...otherProps
}) => {
  const IconComponent = VectorIcons[icon?.family ?? 'AntDesign']
  const btnVariant = variantStyles[variant]
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 100,
    },
    icon: {
      marginRight: 10,
    },
  })
  return (
    <Pressable style={[styles.button, style, btnVariant]} {...otherProps}>
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        {icon && icon.position === 'left' ? (
          <IconComponent name={icon.name} size={20} style={styles.icon} />
        ) : null}
        {!loading ? (
          <Text variant="label/medium" color={btnVariant.textColor as keyof Theme['colors']}>
            {title}
          </Text>
        ) : null}
        {icon && icon.position === 'right' ? (
          <IconComponent name={icon.name} size={20} style={styles.icon} />
        ) : null}
        {loading ? <ThemedActivityIndicator size="small" colorKey="onPrimary" /> : null}
      </Box>
    </Pressable>
  )
}

export default Button
