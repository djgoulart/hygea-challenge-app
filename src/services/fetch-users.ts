import { api } from '@utils/axios'

type User = {
  id: string
  name: string
  email: string
  address: string
  birthDate: Date
}

export type FetchUsersResponse = {
  users: User[]
}

export async function fetchUsers(): Promise<FetchUsersResponse> {
  const response = await api.get('users')

  return response.data
}
