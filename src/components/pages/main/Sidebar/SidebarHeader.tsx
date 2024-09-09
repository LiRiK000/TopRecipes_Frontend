'use client'

import { AnimatePresence, m } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react'

import { Logo } from '@/components/common'
import { cn } from '@/lib/utils'

export const SidebarHeader = ({
  collapsed,
  mobile,
  isOpen,
  toggleSidebar,
}: {
  collapsed: boolean
  mobile: boolean
  isOpen: boolean
  toggleSidebar: () => void
}) => {
  return (
    <>
      {mobile && (
        <div className="flex w-full items-center justify-between px-2">
          <button
            aria-label="Toggle sidebar"
            className="items-center text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <span className="w-full">
              {/* FIXME: need update icon */}
              {isOpen ? (
                <ChevronLeftIcon size={24} className={cn(mobile && 'hidden')} />
              ) : (
                <ChevronRightIcon size={24} className={cn('my-4')} />
              )}
            </span>
          </button>
          {!collapsed && (
            <span
              className={cn(
                'text-xl font-bold transition-opacity',
                collapsed && 'opacity-0',
              )}
            >
              {/* TODO: need update animation on exit */}
              <AnimatePresence
                onExitComplete={() => {
                  console.log('exit')
                }}
              >
                {!collapsed && (
                  <m.div
                    key="expanded"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="cursor-pointer text-center"
                  >
                    <Logo />
                  </m.div>
                )}
              </AnimatePresence>
            </span>
          )}
          {mobile && isOpen && (
            <button
              aria-label="Close sidebar"
              className="text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <XIcon size={24} />
            </button>
          )}
        </div>
      )}
    </>
  )
}
