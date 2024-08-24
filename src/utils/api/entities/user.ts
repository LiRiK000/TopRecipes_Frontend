import { api } from '../instance'

class UserService {
  createUser({ params, config }: AxiosRequestConfig<User>) {
    return api.post('/user/create', params, config)
  }

  checkAuth({ params, config }: AxiosRequestConfig<CheckAuth>) {
    return api.post('/user/checkAuth', params, config)
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
