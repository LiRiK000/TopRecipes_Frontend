import { api } from '@/utils/api/instance'

export const checkAuth = async () => api.get<CheckAuth>(`/user/checkAuth`)
