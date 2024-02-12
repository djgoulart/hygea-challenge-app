import React from 'react'
import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      px={4}
      fontSize="md"
      borderWidth={0}
      color="white"
      fontFamily="body"
      mb={4}
      rounded="md"
      placeholderTextColor={'gray.300'}
      _focus={{
        bg: 'gray.700',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...rest}
    />
  )
}
