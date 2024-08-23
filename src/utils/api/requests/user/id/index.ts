import { api } from '@/utils/api/instance'

export interface GetUserParams {
  id: string
}

export type GetUserConfig = AxiosRequestConfig<GetUserParams>

export const getUsersId = async ({ params, config }: GetUserConfig) =>
  api.get<UserResponse>(`/user/${params.id}`, config)
