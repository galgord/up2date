import { TouchableOpacityProps } from "react-native";
import * as VectorIcons from "@expo/vector-icons";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: string;
  loading?: boolean;
  iconFamily?: keyof typeof VectorIcons;
  iconPosition?: "left" | "right";
}
