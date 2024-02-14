import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ListUsers } from '@screens/list-users'
import { CreateUser } from '@screens/create-user'
import { EditUser } from '@screens/edit-user'
import { SearchUsers } from '@screens/search-users'

type PublicRoutes = {
  listUsers: undefined
  createUser: undefined
  editUser: {
    userId: string
  }
  searchUsers: undefined
}

export type PublicNavigatorRoutesProps = PublicRoutes & {
  [K in keyof PublicRoutes]: PublicRoutes[K] extends object
    ? PublicRoutes[K]
    : object | undefined
}

const { Navigator, Screen } = createNativeStackNavigator<PublicRoutes>()

export function PublicRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="listUsers" component={ListUsers} />
      <Screen name="createUser" component={CreateUser} />
      <Screen name="editUser" component={EditUser} />
      <Screen name="searchUsers" component={SearchUsers} />
    </Navigator>
  )
}
