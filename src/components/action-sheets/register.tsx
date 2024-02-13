import { registerSheet, SheetDefinition } from 'react-native-actions-sheet'
import { UserInfo } from './user-info'
import { DeleteUser } from './delete-user'

registerSheet('user-info-sheet', UserInfo)
registerSheet('delete-user-sheet', DeleteUser)

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'user-info-sheet': SheetDefinition<{
      payload: {
        query?: string
      }
    }>
    'delete-user-sheet': SheetDefinition<{
      payload: {
        userId: string
      }
    }>
  }
}

export {}
