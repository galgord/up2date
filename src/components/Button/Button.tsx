import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps, Pressable, StyleSheet } from 'react-native'
import * as VectorIcons from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@app/utils/theme'
import Box from '../Box/Box'
import Text from '../Text/Text'
import { ButtonProps } from './types'

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
  iconFamily = 'MaterialCommunityIcons', // default icon family
  iconPosition = 'left',
  style,
  loading,
  ...otherProps
}) => {
  const IconComponent = VectorIcons[iconFamily] || VectorIcons.MaterialCommunityIcons

  return (
    <Pressable style={[styles.button, style]} {...otherProps}>
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        {icon && iconPosition === 'left' ? (
          <IconComponent name={icon} size={20} style={styles.icon} />
        ) : null}
        {!loading ? <Text style={styles.text}>{title}</Text> : null}
        {icon && iconPosition === 'right' ? (
          <IconComponent name={icon} size={20} style={styles.icon} />
        ) : null}
        {loading ? <ThemedActivityIndicator size="small" colorKey="white" /> : null}
      </Box>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
})

export default Button
