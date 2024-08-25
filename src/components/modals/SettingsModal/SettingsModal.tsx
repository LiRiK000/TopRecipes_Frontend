'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useDispatch, useSelector } from 'react-redux'

import { Item } from './Item'
import { ModeToggle } from '@/components/common'
import type { RootState } from '@/store/store'
import { closeSettings } from '@/store/slices/modals/settings.slice'

export const SettingsModal = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.settings.isOpen)

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(closeSettings())}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="text-lg font-medium">My settings</DialogTitle>
        </DialogHeader>
        <Item
          label={'Appearance'}
          desc={'Customize how TopRecipes looks on your device'}
          additionalComponent={<ModeToggle />}
        />
      </DialogContent>
    </Dialog>
  )
}
