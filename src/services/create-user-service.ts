import { api } from '@utils/axios'

type CreateUserRequestData = {
  name: string
  email: string
  address: string
  birthDate: Date
}

type CreateUserResponseData = {
  user: {
    id: string
    name: string
    email: string
    address: string
    birthDate: Date
  }
}

export async function createUser(
  data: CreateUserRequestData,
): Promise<CreateUserResponseData> {
  const response = await api.post('user/create', {
    data,
  })

  return response.data
}
