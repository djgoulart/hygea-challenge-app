import { registerSheet, SheetDefinition } from 'react-native-actions-sheet'
import { UserInfo } from './user-info'
import { User } from '@components/user-card'

registerSheet('user-info-sheet', UserInfo)

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'user-info-sheet': SheetDefinition<{
      payload: {
        user: User
      }
    }>
  }
}

export {}
