// TODO need update hover effect
// TODO need update icons
'use client'

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  SettingsIcon,
  User2Icon,
  XIcon,
} from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { Logo } from '@/components/common'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [mobile, setMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = useCallback(() => {
    setCollapsed(prev => !prev)
    if (mobile) {
      setIsOpen(prev => !prev)
    }
  }, [mobile])

  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth <= 640
    setMobile(isMobile)
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <aside
        className={cn(
          'fixed z-40 min-h-screen bg-gray-900 text-white transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
          mobile && isOpen ? 'w-full' : mobile ? 'w-16' : '',
        )}
      >
        <div className="flex items-center justify-between p-4">
          <button
            aria-label="Toggle sidebar"
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            {mobile && isOpen ? (
              <ChevronLeftIcon size={24} className={cn(mobile && 'hidden')} />
            ) : (
              <ChevronRightIcon
                size={24}
                className={cn('mt-3', isOpen && 'hidden')}
              />
            )}
          </button>
          {!collapsed && (
            <span
              className={cn(
                'text-xl font-bold transition-opacity',
                collapsed && 'opacity-0',
              )}
            >
              <Logo className="cursor-pointer" />
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

        <nav className="mt-4 flex items-center">
          <ul className="flex cursor-pointer flex-col items-center gap-y-3">
            <li
              className={cn(
                'flex w-full items-center px-4 py-2 transition-colors duration-300',
                !mobile && 'hover:bg-gray-700',
              )}
            >
              <span>
                <HomeIcon className="mr-4" size={22} />
              </span>
              {!collapsed && (
                <span className="transition-opacity">Главная</span>
              )}
            </li>
            <li
              className={cn(
                'flex items-center px-4 py-2 transition-colors duration-300',
                !mobile && 'hover:bg-gray-700',
              )}
            >
              <span>
                <User2Icon className="mr-4" size={22} />
              </span>
              {!collapsed && (
                <span className="transition-opacity">Профиль</span>
              )}
            </li>
            <li
              className={cn(
                'absolute bottom-2 flex items-center p-3 transition-colors duration-300',
                !mobile && 'hover:bg-gray-700',
              )}
            >
              <SettingsIcon className="mr-4" size={22} />
              {!collapsed && (
                <span className="transition-opacity">Настройки</span>
              )}
            </li>
          </ul>
        </nav>
      </aside>

      <main
        className={cn(
          'flex-1 p-4 transition-all duration-300',
          collapsed ? 'ml-16' : mobile ? '' : 'ml-64',
          mobile && isOpen ? 'hidden' : '',
        )}
      >
        <div className="relative size-full flex-1 rounded-xl bg-primary-foreground p-4">
          {children}
        </div>
      </main>
    </div>
  )
}
