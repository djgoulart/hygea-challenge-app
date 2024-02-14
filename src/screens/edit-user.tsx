import React from 'react'
import {
  Center,
  HStack,
  Heading,
  Image,
  ScrollView,
  VStack,
  useTheme,
} from 'native-base'
import { ChevronLeft } from 'lucide-react-native'
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'

import { DatePicker } from '@components/date-picker'
import BackgroundImg from '@assets/bg.png'
import { Input } from '@components/input'
import { Button } from '@components/button'
import { PublicNavigatorRoutesProps } from '@routes/public-routes'
import { fetchUserInfo } from '@services/fetch-user-info-service'
import { editUser } from '@services/edit-user-service'
import dayjs from 'dayjs'
import { deleteUser } from '@services/delete-user-service'

export type EditUserProps = NativeStackScreenProps<
  PublicNavigatorRoutesProps,
  'editUser'
>

const editUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  birthDate: z
    .string()
    .refine(
      (value) => {
        return dayjs(new Date(value)).isValid()
      },
      {
        message: 'invalid date',
      },
    )
    .transform((value) => new Date(value)),
})

type EditUserSchema = z.infer<typeof editUserSchema>

export function EditUser({ navigation, route }: EditUserProps) {
  const { colors } = useTheme()
  const queryClient = useQueryClient()
  const { userId } = route.params

  const { data: userInfo } = useQuery({
    queryKey: ['user-info', userId],
    queryFn: async () => {
      return fetchUserInfo(userId)
    },
  })

  const { control, handleSubmit } = useForm<EditUserSchema>({
    resolver: zodResolver(editUserSchema),
    values: {
      name: userInfo?.user.name || '',
      email: userInfo?.user.email || '',
      birthDate: userInfo?.user.birthDate as Date,
      address: userInfo?.user.address || '',
    },
  })

  const handleBack = () => {
    navigation.navigate('listUsers')
  }

  const { mutateAsync: deleteUserFn, isPending: isDeleting } = useMutation({
    mutationFn: async () => {
      return await deleteUser(userId)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users-list'] })
    },
  })

  const handleDeleteUser = async () => {
    await deleteUserFn()
    navigation.navigate('listUsers')
  }

  const { mutateAsync: editUserFn, isPending } = useMutation({
    mutationFn: async (data: EditUserSchema) => {
      return await editUser(userId, data)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['user-info', userId] })
      queryClient.invalidateQueries({ queryKey: ['users-list'] })
    },
  })

  async function handleEditUser(data: EditUserSchema) {
    await editUserFn(data)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack
          bgColor="black"
          flex="1"
          h={'full'}
          width={'full'}
          px={10}
          pb="48"
        >
          <Image
            source={BackgroundImg}
            alt="pessoas em equipe"
            resizeMode="cover"
            position="absolute"
            height={'full'}
            opacity={0.2}
          />

          <Center my={24}>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              width="full"
            >
              <TouchableOpacity activeOpacity={0.7} onPress={handleBack}>
                <HStack
                  rounded="md"
                  alignItems="center"
                  justifyContent="space-around"
                  borderWidth={0}
                >
                  <ChevronLeft size={36} color={colors.green[500]} />
                </HStack>
              </TouchableOpacity>
              <HStack
                alignItems="center"
                justifyContent="flex-end"
                flexGrow={1}
              >
                <Heading color="gray.100">{userInfo?.user.name}</Heading>
              </HStack>
            </HStack>
          </Center>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value || userInfo?.user.name}
                defaultValue={userInfo?.user.name}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                keyboardType="email-address"
                placeholder="E-mail"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value || userInfo?.user.email}
                defaultValue={userInfo?.user.email}
              />
            )}
          />

          <Controller
            control={control}
            name="birthDate"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                onChangeEvent={onChange}
                value={value || userInfo?.user.birthDate}
              />
            )}
          />

          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Endereço"
                onChangeText={onChange}
                value={value || userInfo?.user.address}
                defaultValue={userInfo?.user.address}
                onSubmitEditing={handleSubmit(handleEditUser)}
              />
            )}
          />

          <Button
            title="Salvar"
            mt={24}
            onPress={handleSubmit(handleEditUser)}
            isLoading={isPending}
            isLoadingText="Salvando ..."
          />

          <Button
            title="Excluir"
            variant="danger"
            mt={4}
            onPress={handleDeleteUser}
            isLoading={isDeleting}
            isLoadingText="Aguarde ..."
          />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
