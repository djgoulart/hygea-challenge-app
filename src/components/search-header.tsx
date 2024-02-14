import { ChevronLeft } from 'lucide-react-native'
import { Center, HStack, Heading, useTheme } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'

type SearchHeaderProps = {
  backFn: () => void
}

export function SearchHeader({ backFn }: SearchHeaderProps) {
  const { colors } = useTheme()

  return (
    <Center mt={12}>
      <HStack alignItems="center" justifyContent="space-between" width="full">
        <TouchableOpacity activeOpacity={0.7} onPress={backFn}>
          <HStack
            rounded="md"
            alignItems="center"
            justifyContent="space-around"
            borderWidth={0}
          >
            <ChevronLeft size={36} color={colors.green[500]} />
          </HStack>
        </TouchableOpacity>
        <HStack alignItems="center" justifyContent="center" flexGrow={1}>
          <Heading color="gray.100" ml={-4}>
            Pesquisa de usuários
          </Heading>
        </HStack>
      </HStack>
    </Center>
  )
}
