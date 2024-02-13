import { registerSheet, SheetDefinition } from 'react-native-actions-sheet'
import { UserInfo } from './user-info'

registerSheet('user-info-sheet', UserInfo)

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'user-info-sheet': SheetDefinition<{
      payload: {
        query?: string
      }
    }>
  }
}

export {}
