import { api } from '@/config/api/instance'

export const checkAuth = async () => api.get<CheckAuth>(`/user/checkAuth`)
