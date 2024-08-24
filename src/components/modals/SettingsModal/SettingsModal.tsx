'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useDispatch, useSelector } from 'react-redux'

import { Label } from '@/components/ui/label'
import { ModeToggle } from '../../common'
import type { RootState } from '@/store/store'
import { closeSettings } from '@/store/slices/settings.slice'

export const SettingsModal = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.settings.isOpen)

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(closeSettings())}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="text-lg font-medium">My settings</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how TopRecipes looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  )
}
