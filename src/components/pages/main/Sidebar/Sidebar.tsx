'use client'

import { HomeIcon, SettingsIcon, User2Icon } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import type { ReactNode } from 'react'
import { SidebarHeader } from './SidebarHeader'
import SidebarItem from './SidebarItem'
import { cn } from '@/lib/utils'
import { openSettings } from '@/store/slices/modals/settings.slice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
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

  const dispatch = useDispatch()

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <aside
        className={cn(
          'fixed z-40 flex min-h-screen flex-col items-center bg-gray-900 text-white transition-all duration-300',
          collapsed ? (mobile ? 'w-12' : 'w-16') : 'w-64 items-start',
          mobile && isOpen ? 'w-full' : mobile ? 'w-12' : '',
        )}
      >
        <SidebarHeader
          mobile={mobile}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          collapsed={collapsed}
        />
        <nav className="mt-4 flex w-full items-center">
          <ul
            className={cn(
              'flex cursor-pointer flex-col items-center gap-y-3',
              !mobile && 'w-full',
            )}
          >
            <SidebarItem
              mobile={mobile}
              collapsed={collapsed}
              text="Home"
              IconEl={HomeIcon}
              onClick={() => {
                router.push('/main')
              }}
            />
            <SidebarItem
              mobile={mobile}
              collapsed={collapsed}
              text="Profile"
              IconEl={User2Icon}
              onClick={() => {
                router.push('/main/me')
              }}
            />
            <SidebarItem
              mobile={mobile}
              collapsed={collapsed}
              text="Settings"
              IconEl={SettingsIcon}
              onClick={() => {
                dispatch(openSettings())
              }}
              classNames="absolute bottom-6 inset-x-0"
            />
          </ul>
        </nav>
      </aside>

      <main
        className={cn(
          'flex-1 p-4 transition-all duration-300',
          collapsed ? (mobile ? 'ml-12' : 'ml-16') : mobile ? '' : 'ml-64',
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
