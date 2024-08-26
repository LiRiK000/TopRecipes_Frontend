import { api } from '@/config/api/instance'

export interface LoginUserParams {
  email: string
  password: string
}
export type LoginUserConfig = AxiosRequestConfig<LoginUserParams>

export const LoginUser = async ({ params, config }: LoginUserConfig) =>
  api.post<UserResponse>(`/user/create`, params, config)
