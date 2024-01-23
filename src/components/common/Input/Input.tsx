import React, { useMemo } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import * as VectorIcons from '@expo/vector-icons';
import { InputProps } from './types';
import Box from '../Box/Box';


const getIconComponent = (iconFamily: keyof typeof VectorIcons) => {
  const IconComponent = VectorIcons[iconFamily];
  if (!IconComponent) {
    // Fallback to MaterialCommunityIcons or any default
    return VectorIcons.MaterialCommunityIcons;
  }
  return IconComponent;
};

const Input: React.FC<InputProps> = ({
  leftIcon,
  rightIcon,
  ...otherProps
}) => {
  const LeftIconComponent = useMemo(() => leftIcon?.family ? getIconComponent(leftIcon?.family) : null, [leftIcon?.family]);
  const RightIconComponent = useMemo(() => rightIcon?.family ? getIconComponent(rightIcon?.family) : null, [rightIcon?.family]);
  return (
    <Box flexDirection='row' alignItems='center' borderWidth={1} borderColor={'gray'} p='m' borderRadius={5}  >
      {LeftIconComponent && leftIcon?.name && <LeftIconComponent name={leftIcon.name} size={leftIcon.size} style={styles.icon} color={leftIcon.color}/>}
      <TextInput style={styles.input} {...otherProps} />
      {RightIconComponent && rightIcon?.name && <RightIconComponent name={rightIcon.name} size={rightIcon.size} style={styles.icon} color={rightIcon.color}/>}
    </Box>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});

export default Input;
