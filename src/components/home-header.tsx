import { Users } from 'lucide-react-native'
import { Center, Heading, Text, VStack, useTheme } from 'native-base'
import React from 'react'

export function HomeHeader() {
  const { colors } = useTheme()

  return (
    <Center pt={16} pb={9}>
      <VStack alignItems="center" justifyContent="center">
        <Users width={40} height={40} color={colors.green[500]} />
        <Heading color="gray.100">Listagem de Usuários</Heading>
      </VStack>
      <Text color="white">Hygea Fullstack Code Challenge</Text>
    </Center>
  )
}
