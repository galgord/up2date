import React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import * as VectorIcons from "@expo/vector-icons";
import { ButtonProps } from "./types";
import Box from "../Box/Box";
import Text from "../Text/Text";
import theme from "@Utils/theme";
const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  iconFamily = "MaterialCommunityIcons", // default icon family
  iconPosition = "left",
  style,
  loading,
  ...otherProps
}) => {
  const IconComponent =
    VectorIcons[iconFamily] || VectorIcons.MaterialCommunityIcons;

  return (
    <TouchableOpacity style={[styles.button, style]} {...otherProps}>
      <Box flexDirection="row" alignItems="center" justifyContent="center">
        {icon && iconPosition === "left" ? (
          <IconComponent name={icon} size={20} style={styles.icon} />
        ) : null}
        {!loading ? <Text style={styles.text}>{title}</Text> : null}
        {icon && iconPosition === "right" ? (
          <IconComponent name={icon} size={20} style={styles.icon} />
        ) : null}
        {loading ? (
          <ActivityIndicator size="small" color={theme.colors.white} />
        ) : null}
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "blue",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});

export default Button;
