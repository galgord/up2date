import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@app/utils/theme'

export type IconNames = keyof typeof MaterialCommunityIcons.glyphMap

const Icon: React.FC<{
  name: IconNames
  color?: keyof Theme['colors']
  size?: number
}> = ({ color: colorKey, ...rest }) => {
  const theme = useTheme<Theme>()
  const color = colorKey ? theme.colors[colorKey] : theme.colors.scrim

  return <MaterialCommunityIcons color={color} {...rest} style={{ zIndex: 99 }} />
}

export default Icon
