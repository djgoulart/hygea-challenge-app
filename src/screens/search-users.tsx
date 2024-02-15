import React, { useState } from 'react'
import {
  Image,
  VStack,
  useTheme,
  FlatList,
  HStack,
  Center,
  Spinner,
} from 'native-base'
import { Search } from 'lucide-react-native'

import BackgroundImg from '@assets/bg.png'
import { UserCard } from '@components/user-card'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { PublicNavigatorRoutesProps } from '@routes/public-routes'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '@services/fetch-users-service'
import { Input } from '@components/input'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchHeader } from '@components/search-header'
import { useDebounce } from '@hooks/useDebounce'

export type SearchUsersProps = NativeStackScreenProps<
  PublicNavigatorRoutesProps,
  'searchUsers'
>

export function SearchUsers({ navigation }: SearchUsersProps) {
  const { colors } = useTheme()
  const { top } = useSafeAreaInsets()
  const [searchParam, setSearchParam] = useState('')

  const handleBack = () => {
    navigation.navigate('listUsers')
  }

  const handleShowUserDetails = async (userId: string) => {
    navigation.navigate('editUser', { userId })
  }

  const debouncedSearch = useDebounce(searchParam.toLowerCase(), 500)

  const { data: usersList, isLoading } = useQuery({
    queryKey: ['users-search', debouncedSearch],
    queryFn: async () => {
      return await fetchUsers(debouncedSearch)
    },
    enabled: !!debouncedSearch,
  })

  async function handleSearch(value: string) {
    setSearchParam(value)
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.isVisible ?? Keyboard.dismiss}
      style={{ flex: 1, backgroundColor: colors.amber[100] }}
    >
      <VStack h="full" w="full" flex="1">
        <Image
          source={BackgroundImg}
          alt="pessoas em equipe"
          resizeMode="cover"
          position="absolute"
          height={'full'}
          opacity={0.2}
        />

        <SearchHeader backFn={handleBack} />

        <VStack px={4} maxH="3/4">
          <HStack
            mb={4}
            alignItems="center"
            justifyContent="space-between"
            borderBottomColor="gray.600"
            borderBottomWidth={1}
            pb={4}
            pt={`${top}px`}
          >
            <Input
              px={4}
              flexGrow={1}
              placeholder="Pesquise pelo nome ou email..."
              value={searchParam}
              onChangeText={handleSearch}
              InputRightElement={
                <Center bg="green.500" size={16}>
                  {isLoading ? (
                    <Spinner color="green.100" />
                  ) : (
                    <Search size={24} color={colors.green[100]} />
                  )}
                </Center>
              }
            />
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
    </TouchableWithoutFeedback>
  )
}
