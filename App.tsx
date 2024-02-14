/* eslint-disable camelcase */
import React from 'react'
import { LogBox, StatusBar } from 'react-native'
import { SheetProvider } from 'react-native-actions-sheet'
import '@components/action-sheets/register'
import { QueryClientProvider } from '@tanstack/react-query'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from '@components/loading'

import ThemeProvider from 'src/theme/theme-provider'
import { Routes } from '@routes/index'
import { queryClient } from '@utils/react-query'

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...'])

// Ignore all log notifications:
LogBox.ignoreAllLogs()

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SheetProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />

          {fontsLoaded ? <Routes /> : <Loading />}
        </SheetProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
