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

import BackgroundImg from '@assets/bg.png'
import { Input } from '@components/input'
import { Button } from '@components/button'
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { DatePicker } from '@components/date-picker'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PublicNavigatorRoutesProps } from '@routes/public-routes'

/* type User = {
  id: string
  name: string
  email: string
  address: string
  birthDate: Date
} */

export type EditUserProps = NativeStackScreenProps<
  PublicNavigatorRoutesProps,
  'editUser'
>

export function EditUser({ navigation, route }: EditUserProps) {
  const { colors } = useTheme()
  // const navigation = useNavigation<PublicNavigatorRoutesProps>()

  const { userId } = route.params
  console.log('USER', userId)

  const onSelectDate = (e: DateTimePickerEvent, selectedDate?: Date) => {
    console.log('Selected', e, selectedDate)
  }

  const handleBack = () => {
    navigation.navigate('listUsers')
  }

  const handleDeleteUser = () => {
    console.log('DELETE', userId)
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
                <Heading color="gray.100">Diego</Heading>
              </HStack>
            </HStack>
          </Center>

          <Input placeholder="Nome" />

          <Input
            keyboardType="email-address"
            placeholder="E-mail"
            autoCapitalize="none"
          />

          <Input placeholder="Endereço" />

          <DatePicker onChangeEvent={onSelectDate} />

          <Button title="Salvar" mt={24} />
          <Button
            title="Excluir"
            variant="danger"
            mt={4}
            onPress={handleDeleteUser}
          />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
