import React from 'react'
import { Image, Text, VStack, useTheme, FlatList, HStack } from 'native-base'
import { PlusCircle, Search } from 'lucide-react-native'

import BackgroundImg from '@assets/bg.png'
import { HomeHeader } from '@components/home-header'
import { UserCard } from '@components/user-card'
import { TouchableOpacity } from 'react-native'
import { SheetManager } from 'react-native-actions-sheet'
import { PublicNavigatorRoutesProps } from '@routes/public-routes'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchUsers } from '@services/fetch-users'

export type ListUsersProps = NativeStackScreenProps<
  PublicNavigatorRoutesProps,
  'listUsers'
>

export function ListUsers({ navigation }: ListUsersProps) {
  const { colors } = useTheme()
  const queryClient = useQueryClient()

  const handleSearchPress = () => {
    SheetManager.show('user-info-sheet', {
      payload: { query: '' },
    })
  }

  const handleNewUser = () => {
    navigation.navigate('createUser')
  }

  const handleShowUserDetails = async (userId: string) => {
    navigation.navigate('editUser', { userId })
  }

  const { data: usersList } = useQuery({
    queryKey: ['users-list'],
    queryFn: fetchUsers,
  })

  return (
    <VStack h="full" w="full" flex="1">
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
        <HStack
          mb={4}
          alignItems="center"
          justifyContent="space-between"
          borderBottomColor="gray.600"
          borderBottomWidth={1}
          pb={4}
        >
          <TouchableOpacity activeOpacity={0.7} onPress={handleNewUser}>
            <HStack
              rounded="md"
              bg="green.500"
              alignItems="center"
              justifyContent="space-around"
              py={2}
              px={4}
            >
              <Text
                color="gray.100"
                fontFamily="heading"
                pr={1}
                textTransform="uppercase"
              >
                Novo
              </Text>
              <PlusCircle size={24} color={colors.gray[100]} />
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={handleSearchPress}>
            <HStack
              rounded="md"
              bg="transparent"
              alignItems="center"
              justifyContent="space-around"
              py={2}
              px={4}
              borderColor="green.500"
              borderWidth={1}
            >
              <Search size={24} color={colors.green[500]} />
            </HStack>
          </TouchableOpacity>
        </HStack>
        <FlatList
          data={usersList?.users}
          keyExtractor={({ id }) => id}
          renderItem={({ item: user }) => (
            <UserCard
              user={{
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address,
                birthDate: new Date(user.birthDate),
              }}
              onPress={() => handleShowUserDetails(user.id)}
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
