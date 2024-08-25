'use client'

import { type LucideIcon } from 'lucide-react'

interface SidebarItemProps {
  label: string
  icon: LucideIcon
  onClick?: () => void
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { icon: Icon, label, onClick } = props
  return (
    <div role="button" onClick={onClick}>
      <span className="flex items-center justify-center">
        <Icon className="mr-2 size-[18px] shrink-0 text-foreground" /> {label}
      </span>
    </div>
  )
}
