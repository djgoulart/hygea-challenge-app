/* eslint-disable camelcase */
import React from 'react'
import { LogBox, StatusBar } from 'react-native'
import { SheetProvider } from 'react-native-actions-sheet'
import '@components/action-sheets/register'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from '@components/loading'

import ThemeProvider from 'src/theme/theme-provider'
import { Routes } from '@routes/index'

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...'])

// Ignore all log notifications:
LogBox.ignoreAllLogs()

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider>
      <SheetProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        {fontsLoaded ? <Routes /> : <Loading />}
      </SheetProvider>
    </ThemeProvider>
  )
}
