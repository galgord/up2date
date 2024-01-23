import { TextInputProps } from 'react-native';
import * as VectorIcons from '@expo/vector-icons';

export interface InputProps extends TextInputProps {
  leftIcon?: {
    name: string;
    family?: keyof typeof VectorIcons;
    size?: number;
    color?: string;
  };
  rightIcon?: {
    name: string;
    family?: keyof typeof VectorIcons;
    size?: number;
    color?: string;
  };
}