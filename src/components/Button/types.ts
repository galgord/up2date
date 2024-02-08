import { TouchableOpacityProps } from 'react-native'
import * as VectorIcons from '@expo/vector-icons'

export interface ButtonProps extends TouchableOpacityProps {
  title: string
  icon?: {
    name: string
    family: keyof typeof VectorIcons
    position: 'left' | 'right'
  }
  loading?: boolean
  variant?: 'primary' | 'outline'
}
