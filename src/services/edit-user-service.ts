import { api } from '@utils/axios'

type EditUserRequestData = {
  name: string
  email: string
  address: string
  birthDate: Date
}

type EditUserResponseData = {
  status: number
}

export async function editUser(
  id: string,
  data: EditUserRequestData,
): Promise<EditUserResponseData | void> {
  try {
    const response = await api.put(`user/${id}/edit`, {
      data,
    })

    return { status: response.status }
  } catch (error) {
    console.log('Request ERR', error)
  }
}
