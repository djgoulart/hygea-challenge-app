import React from 'react'
import { Center, VStack, useTheme } from 'native-base'
import ActionSheet, { SheetProps } from 'react-native-actions-sheet'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Search } from 'lucide-react-native'
import { Input } from '@components/input'

export function DeleteUser({ sheetId }: SheetProps<'user-info-sheet'>) {
  const insets = useSafeAreaInsets()
  const { colors } = useTheme()
  return (
    <ActionSheet
      id={sheetId}
      safeAreaInsets={insets}
      useBottomSafeAreaPadding
      headerAlwaysVisible
      snapPoints={[20, 50]}
      gestureEnabled
      containerStyle={{ backgroundColor: colors.black }}
      indicatorStyle={{ backgroundColor: colors.green[500] }}
    >
      <VStack h="100%" px={6} pt={4}>
        <Input
          bg="gray.700"
          placeholder="Pesquisar..."
          InputLeftElement={
            <Center ml={4}>
              <Search size={16} color={colors.gray[300]} />
            </Center>
          }
        />
      </VStack>
    </ActionSheet>
  )
}
