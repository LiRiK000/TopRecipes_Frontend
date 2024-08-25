'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useDispatch, useSelector } from 'react-redux'

import LoginForm from '@/components/forms/LoginForm'
import type { RootState } from '@/store/store'
import { closeLogin } from '@/store/slices/modals/login.slice'

export const LoginModal = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.login.isOpen)

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(closeLogin())}>
      <DialogContent aria-describedby="">
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="text-lg font-medium">Login</DialogTitle>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  )
}
