'use client'

import * as axios from '@/config/api/requests/user'

import { useEffect, useState } from 'react'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import type { LoginSchema } from '@/config/zod'
import { loginSchema } from '@/config/zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()
  const [disabled, setDisabled] = useState<boolean>(true)

  // TODO: Test it
  const onSubmit = async (data: LoginSchema) => {
    axios
      .LoginUser({ params: { email: data.email, password: data.password } })
      .then(() => {
        toast.success('Logged in successfully')
        setTimeout(() => {
          router.push('/main')
        }, 3000)
      })
      .catch(err => {
        toast.error('Failed to login', err.message)
      })
  }

  useEffect(() => {
    if (!errors.email && !errors.password) {
      setDisabled(false)
    }
  }, [errors.email, errors.password])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <div>
          <label>Email</label>
          <Input type="email" {...register('email')} />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <Input type="password" {...register('password')} />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>
        <Button type="submit" variant="outline" disabled={disabled}>
          Login
        </Button>
      </form>
      <p className="text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <span
          className="cursor-pointer text-sky-700 hover:underline"
          role="button"
          // TODO: Implement sign up modal dialog
          onClick={() => {}}
        >
          Sign Up
        </span>
      </p>
    </>
  )
}
