//FIXME

'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import type { RootState } from '@/store/store'
// import { api } from '@/utils/api/instance'
import axios from 'axios'
import { setAuth } from '@/store/user/user.reducer'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const ClientAuthWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { isAuth } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const router = useRouter()
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('isAuth')

    const checkAuth = async () => {
      try {
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('accessToken='))
          ?.split('=')[1]

        if (token) {
          const response = await axios.get(
            'localhost:3333/api/user/checkAuth',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          if (response) {
            dispatch(setAuth(true))
            sessionStorage.setItem('isAuth', 'true')
          }
        } else {
          throw new Error('No token found')
        }
      } catch (error) {
        dispatch(setAuth(false))
        router.push('/login')
        toast.error('Unauthorized')
        console.log(error)
      }
    }

    if (hydrated) {
      if (!isAuth && !sessionAuth) {
        checkAuth()
      } else if (sessionAuth === 'true') {
        dispatch(setAuth(true))
      }
    }
  }, [hydrated, isAuth, dispatch, router])

  if (!hydrated || !isAuth) {
    return null
  }

  return <>{children}</>
}
