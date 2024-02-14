import { api } from '@utils/axios'

export type DeleteUserResponse = {
  status: number
}

export async function deleteUser(userId: string): Promise<DeleteUserResponse> {
  const response = await api.delete(`user/delete/${userId}`)

  return { status: response.status }
}
