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

export async function fetchUsers(
  search?: string,
  signal?: AbortSignal,
): Promise<FetchUsersResponse> {
  const response = await api.get(`user/list`, {
    params: {
      query: search || null,
    },
    signal,
  })

  return response.data
}
