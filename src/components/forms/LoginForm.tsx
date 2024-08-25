// FIXME: Errors not a rendering

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import type { LoginSchema } from '@/config/zod'
import { loginSchema } from '@/config/zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginSchema) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <div>
        <label>Email</label>
        <Input type="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <Input type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <Button type="submit" variant="ghost">
        Login
      </Button>
    </form>
  )
}
