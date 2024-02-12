import React, { useState } from 'react'
import { Image, Text, VStack, useTheme, FlatList, HStack } from 'native-base'
import { PlusCircle } from 'lucide-react-native'

import BackgroundImg from '@assets/bg.png'
import { HomeHeader } from '@components/home-header'
import { UserCard } from '@components/user-card'
import { TouchableOpacity } from 'react-native'

export function ListUsers() {
  const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  const { colors } = useTheme()
  return (
    <VStack bg="black" h="full" w="full" flex="1">
      <Image
        source={BackgroundImg}
        alt="pessoas em equipe"
        resizeMode="cover"
        position="absolute"
        height={'full'}
        opacity={0.2}
      />
      <HomeHeader />
      <VStack px={4} maxH="3/4">
        <HStack mb={4} alignItems="center" justifyContent="space-between">
          <Text color="gray.100" fontSize="lg">
            Usuários{` (${users.length})`}
          </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <HStack
              rounded="sm"
              bg="green.500"
              alignItems="center"
              justifyContent="space-around"
              w={24}
              py={2}
              px={4}
            >
              <Text color="gray.100" fontFamily="heading">
                Novo
              </Text>
              <PlusCircle size={24} color={colors.gray[100]} />
            </HStack>
          </TouchableOpacity>
        </HStack>
        <FlatList
          data={users}
          keyExtractor={(item) => item.toString()}
          renderItem={(item) => (
            <UserCard
              user={{
                name: 'Diego',
                email: 'diego@test.com',
                address: 'Avenida A, 333',
                birthDate: new Date(1988, 0, 19),
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 10,
          }}
          fadingEdgeLength={120}
          bounces={false}
        />
      </VStack>
    </VStack>
  )
}