interface User {
  username: string
  email: string
  id: string
  created_at: string
  updated_at: string
}
interface UserResponse {
  success: boolean
  status: number
  data: User
  message?: string
}
