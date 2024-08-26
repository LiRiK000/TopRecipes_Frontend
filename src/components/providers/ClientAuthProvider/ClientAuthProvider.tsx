'use client'

import * as axios from '@/config/api/requests/user'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { Loader } from '@/components/common'
import type { RootState } from '@/store/store'
import { setAuth } from '@/store/slices/user.slice'
import { useRouter } from 'next/navigation'

export const ClientAuthProvider = ({
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
          const response = await axios.checkAuth()
          if (response) {
            dispatch(setAuth(true))
            sessionStorage.setItem('isAuth', 'true')
          }
        } else {
          throw new Error('No token found')
        }
      } catch (error) {
        // TODO

        // dispatch(setAuth(false))
        // router.push('/login')
        // toast.error('Unauthorized')
        console.log(error)

        dispatch(setAuth(true))
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
    return (
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
        <Loader size="lg" className="size-80" />
      </div>
    )
  }

  return <>{children}</>
}
