import { api } from '@utils/axios'

type User = {
  id: string
  name: string
  email: string
  address: string
  birthDate: Date
}

export type FetchUsersResponse = {
  user: User
}

export async function fetchUserInfo(
  userId: string,
): Promise<FetchUsersResponse> {
  const response = await api.get(`user/${userId}`)

  return response.data
}
