/* eslint-disable camelcase */
import React from 'react'
import { LogBox, StatusBar } from 'react-native'
import { Box } from 'native-base'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from '@components/loading'

import { CreateUser } from '@screens/create-user'
import ThemeProvider from 'src/theme/theme-provider'
import { ListUsers } from '@screens/list-users'

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...'])

// Ignore all log notifications:
LogBox.ignoreAllLogs()

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        {fontsLoaded ? <ListUsers /> : <Loading />}
      </>
    </ThemeProvider>
  )
}
