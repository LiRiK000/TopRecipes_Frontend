'use client'

import { AnimatePresence, m } from 'framer-motion'

import { cn } from '@/lib/utils'

export const SidebarItem = ({
  mobile,
  collapsed,
  text,
  IconEl,
  classNames,
  onClick,
}: {
  mobile: boolean
  collapsed: boolean
  classNames?: string
  text: string
  IconEl: React.ElementType
  onClick: () => void
}) => {
  return (
    <li
      role="button"
      className={cn(
        'flex w-full items-center px-4 py-2 transition-colors duration-300',
        !mobile && 'hover:bg-gray-700',
        collapsed && 'justify-center',
        classNames,
      )}
      onClick={onClick}
    >
      <span>
        {IconEl && (
          <IconEl className={cn(collapsed ? 'mr-0' : 'mr-4')} size={22} />
        )}
      </span>
      {!collapsed && (
        // TODO: Fix the animation
        <AnimatePresence>
          <m.span
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            {text}
          </m.span>
        </AnimatePresence>
      )}
    </li>
  )
}
