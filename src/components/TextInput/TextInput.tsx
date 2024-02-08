import React from 'react'
import { TextInput as ImportedTextInput, TextInputProps } from 'react-native'
import { BoxProps, createRestyleComponent, textRestyleFunctions } from '@shopify/restyle'
import { Theme } from '@app/utils/theme'

// Ensure this path is correct

const restyleFunctions = textRestyleFunctions // Use textRestyleFunctions or other functions as needed

const TextInput: React.FC<
  TextInputProps & React.ComponentProps<typeof ImportedTextInput> & BoxProps<Theme>
> = createRestyleComponent(restyleFunctions, ImportedTextInput)

export default TextInput
