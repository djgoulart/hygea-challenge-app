import { ChevronRight, User } from 'lucide-react-native'
import { Center, HStack, Heading, Text, VStack, useTheme } from 'native-base'
import React from 'react'
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

export type User = {
  id: string
  name: string
  email: string
  address: string
  birthDate: Date
}

type UserCardProps = TouchableOpacityProps & {
  user: User
  onPress: (event: GestureResponderEvent) => void
}

export function UserCard({ user, onPress, ...rest }: UserCardProps) {
  const { colors } = useTheme()

  return (
    <TouchableOpacity {...rest} activeOpacity={0.8} onPress={onPress}>
      <HStack
        bg="gray.500"
        py={4}
        px={4}
        rounded="md"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Center bg="transparent" width={10} h={10} rounded="full" mr={4}>
          <User width={28} height={28} color={colors.gray[300]} />
        </Center>
        <VStack flexGrow={1}>
          <Heading color="gray.100" fontSize="lg">
            {user.name}
          </Heading>
          <Text color="gray.300">{user.email}</Text>
        </VStack>
        <Center>
          <ChevronRight width={28} height={28} color={colors.gray[300]} />
        </Center>
      </HStack>
    </TouchableOpacity>
  )
}
