import { api } from '../instance'

class UserService {
  createUser({ params, config }: AxiosRequestConfig<Omit<User, 'id'>>) {
    return api.post('/user/create', params, config)
  }
  getUserById({
    params,
    config,
  }: AxiosRequestConfig<{
    id: string
  }>) {
    return api.get<UserResponse>(`/user/${params.id}`, config)
  }
}

export default UserService
