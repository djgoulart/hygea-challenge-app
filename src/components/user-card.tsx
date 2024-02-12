import { ArrowRight, User } from 'lucide-react-native'
import { Center, HStack, Heading, Text, VStack, useTheme } from 'native-base'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type UserCardProps = TouchableOpacityProps & {
  user: {
    name: string
    email: string
    address: string
    birthDate: Date
  }
}

export function UserCard({ user, ...rest }: UserCardProps) {
  const { colors } = useTheme()

  return (
    <TouchableOpacity {...rest} activeOpacity={0.8}>
      <HStack
        bg="gray.500"
        py={4}
        px={4}
        rounded="md"
        alignItems="center"
        justifyContent="space-between"
        my={1}
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
          <ArrowRight width={28} height={28} color={colors.gray[300]} />
        </Center>
      </HStack>
    </TouchableOpacity>
  )
}
