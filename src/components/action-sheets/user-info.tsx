import React from 'react'
import { HStack, Text, VStack, useTheme } from 'native-base'
import ActionSheet, { SheetProps } from 'react-native-actions-sheet'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AtSign, Pin, Star, User } from 'lucide-react-native'
import dayjs from 'dayjs'

export function UserInfo({ sheetId, payload }: SheetProps<'user-info-sheet'>) {
  const insets = useSafeAreaInsets()
  const { colors } = useTheme()
  return (
    <ActionSheet
      id={sheetId}
      safeAreaInsets={insets}
      useBottomSafeAreaPadding
      snapPoints={[30, 50]}
      gestureEnabled
      containerStyle={{ backgroundColor: colors.gray[700] }}
      indicatorStyle={{ backgroundColor: colors.green[500] }}
    >
      <VStack h="100%" px={6} pt={4}>
        <HStack alignItems="center" mb={2}>
          <User size={18} color={colors.green[500]} />
          <Text color="gray.300" fontSize={16} pl={2}>
            {payload?.user.name}
          </Text>
        </HStack>
        <HStack alignItems="center" mb={2}>
          <AtSign size={18} color={colors.green[500]} />
          <Text color="gray.300" fontSize={16} pl={2}>
            {payload?.user.email}
          </Text>
        </HStack>
        <HStack alignItems="center" mb={2}>
          <Star size={18} color={colors.green[500]} />
          <Text color="gray.300" fontSize={16} pl={2}>
            {dayjs(payload?.user.birthDate).format('DD/MM/YYYY')}
          </Text>
        </HStack>
        <HStack alignItems="center">
          <Pin size={18} color={colors.green[500]} />
          <Text color="gray.300" fontSize={16} pl={2}>
            {payload?.user.address}
          </Text>
        </HStack>
      </VStack>
    </ActionSheet>
  )
}
