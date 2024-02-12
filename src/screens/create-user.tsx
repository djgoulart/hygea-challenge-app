import React from 'react'
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
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

export function CreateUser() {
  const { colors } = useTheme()

  const onSelectDate = (e: DateTimePickerEvent, selectedDate?: Date) => {
    console.log('Selected', e, selectedDate)
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
            <VStack alignItems="center" justifyContent="center">
              <Users width={40} height={40} color={colors.green[500]} />
              <Heading color="gray.100">Cadastro de Usuários</Heading>
            </VStack>
            <Text color="white">Hygea Fullstack Code Challenge</Text>
          </Center>

          <Input placeholder="Nome" />

          <Input
            keyboardType="email-address"
            placeholder="E-mail"
            autoCapitalize="none"
          />

          <Input placeholder="Endereço" />

          <DatePicker onChangeEvent={onSelectDate} />

          <Button
            title="Cadastrar"
            isLoading
            isLoadingText="Enviando..."
            mt={24}
          />
          <Button title="Voltar" variant="outline" mt={4} />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
