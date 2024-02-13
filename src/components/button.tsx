import React from 'react'
import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type ButtonProps = IButtonProps & {
  title: string
  variant?: 'solid' | 'outline' | 'danger'
}

export function Button({ title, variant = 'solid', ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg={variant !== 'solid' ? 'transparent' : 'green.700'}
      borderWidth={variant !== 'solid' ? 1 : 0}
      borderColor={variant === 'danger' ? 'danger.500' : 'green.500'}
      rounded="md"
      _pressed={{
        bg: variant !== 'solid' ? 'gray.500' : 'green.500',
      }}
      {...rest}
    >
      <Text
        color={
          variant === 'outline'
            ? 'green.500'
            : variant === 'danger'
              ? 'danger.500'
              : 'white'
        }
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
