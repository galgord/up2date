import { TextInputProps } from 'react-native'
import { Theme } from '@app/utils/theme'
import { IconNames } from '../Icon/Icon'

export interface InputProps extends TextInputProps {
  leftIcon?: {
    name: IconNames
    size?: number
    color?: keyof Theme['colors']
  }
  rightIcon?: {
    name: IconNames
    size?: number
    color?: keyof Theme['colors']
  }
}
