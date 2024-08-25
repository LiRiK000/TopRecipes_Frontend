'use client'

import { useEffect, useState } from 'react'

import { Loader } from '@/components/common'
import { SettingsModal } from '@/components/modals'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <Loader />
  }

  return (
    <>
      <SettingsModal />
    </>
  )
}
