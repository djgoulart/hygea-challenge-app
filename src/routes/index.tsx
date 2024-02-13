import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { PublicRoutes } from './public-routes'
import { Box, useTheme } from 'native-base'

export function Routes() {
  const { colors } = useTheme()
  const theme = DefaultTheme
  theme.colors.background = colors.black

  return (
    <Box flex={1} bg="black">
      <NavigationContainer theme={theme}>
        <PublicRoutes />
      </NavigationContainer>
    </Box>
  )
}
