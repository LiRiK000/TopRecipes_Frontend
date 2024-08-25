import { Label } from '@/components/ui/label'
import React from 'react'

interface ItemProps {
  label: string
  desc: string
  additionalComponent?: React.ReactNode
}

export const Item = ({ desc, label, additionalComponent }: ItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-y-1">
        <Label>{label}</Label>
        <span className="text-[0.8rem] text-muted-foreground">{desc}</span>
      </div>
      {additionalComponent && <div>{additionalComponent}</div>}
    </div>
  )
}
