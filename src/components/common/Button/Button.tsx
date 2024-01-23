import React from 'react';
import { TouchableOpacity,StyleSheet  } from 'react-native';
import * as VectorIcons from '@expo/vector-icons';
import { ButtonProps } from './types';
import Box from '../Box/Box';
import Text from '../Text/Text';
const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  iconFamily = 'MaterialCommunityIcons', // default icon family
  iconPosition = 'left',
  style,
  ...otherProps
}) => {
  const IconComponent = VectorIcons[iconFamily] || VectorIcons.MaterialCommunityIcons;

  return (
    <TouchableOpacity style={[styles.button, style]} {...otherProps}>
      <Box flexDirection='row' alignItems='center' justifyContent='center'>
        {icon && iconPosition === 'left' && (
          <IconComponent name={icon} size={20} style={styles.icon} />
        )}
        <Text style={styles.text}>{title}</Text>
        {icon && iconPosition === 'right' && (
          <IconComponent name={icon} size={20} style={styles.icon} />
        )}
      </Box>
    </TouchableOpacity>
  );
};

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
});

export default Button;
