import React, { useEffect } from 'react'
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  useTheme,
} from 'native-base'
import { Users } from 'lucide-react-native'

import BackgroundImg from '@assets/bg.png'
import { Input } from '@components/input'
import { Button } from '@components/button'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { DatePicker } from '@components/date-picker'
import { PublicNavigatorRoutesProps } from '@routes/public-routes'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser } from '@services/create-user'

export type CreateUserProps = NativeStackScreenProps<
  PublicNavigatorRoutesProps,
  'createUser'
>

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  birthDate: z.date(),
})

type CreateUserSchema = z.infer<typeof createUserSchema>

export function CreateUser({ navigation }: CreateUserProps) {
  const { colors } = useTheme()
  const queryClient = useQueryClient()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  })

  const handleBack = () => {
    navigation.navigate('listUsers')
  }

  const { mutateAsync: createUserFn, isPending } = useMutation({
    mutationFn: async (data: CreateUserSchema) => {
      return await createUser(data)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['users-list'] })
    },
  })

  async function handleCreateUser(data: CreateUserSchema) {
    console.log('DATA', data)
    await createUserFn(data)
    // navigation.navigate('listUsers')
  }

  useEffect(() => console.log('EE', errors), [errors])

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
            <VStack alignItems="center" justifyContent="center">
              <Users width={40} height={40} color={colors.green[500]} />
              <Heading color="gray.100">Cadastro de Usuários</Heading>
            </VStack>
            <Text color="white">Hygea Fullstack Code Challenge</Text>
          </Center>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input placeholder="Nome" onChangeText={onChange} value={value} />
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
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="birthDate"
            render={({ field: { onChange, value } }) => (
              <DatePicker onChangeEvent={onChange} value={value} />
            )}
          />

          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Endereço"
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleCreateUser)}
              />
            )}
          />

          <Button
            title="Cadastrar"
            mt={24}
            onPress={handleSubmit(handleCreateUser)}
            isLoading={isPending}
            isLoadingText="Enviando..."
          />
          <Button
            title="Voltar"
            variant="outline"
            mt={4}
            onPress={handleBack}
          />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
