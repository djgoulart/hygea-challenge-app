import React from 'react'
import {
  Button as NativeBaseButton,
  IButtonProps,
  Text,
  useTheme,
} from 'native-base'
import { Calendar } from 'lucide-react-native'

type ButtonProps = IButtonProps & {
  title: string
}

export function DatePickerTrigger({ title, ...rest }: ButtonProps) {
  const { colors } = useTheme()

  return (
    <NativeBaseButton
      w="full"
      h={14}
      px={4}
      mb={4}
      bg="gray.700"
      borderWidth={0}
      borderColor="green.500"
      rounded="md"
      _pressed={{
        bg: 'gray.700',
        borderWidth: 1,
      }}
      leftIcon={<Calendar width={24} height={24} color={colors.green[500]} />}
      {...rest}
    >
      <Text color="white" fontFamily="body" fontSize="md">
        {title}
      </Text>
    </NativeBaseButton>
  )
}
