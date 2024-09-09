'use client'

import { HomeIcon, SettingsIcon, User2Icon } from 'lucide-react'
import {
  setCollapsed,
  setIsOpen,
  setMobile,
} from '@/store/slices/mainPage/sidebar.slice'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { ReactNode } from 'react'
import type { RootState } from '@/store/store'
import { SidebarHeader } from './SidebarHeader'
import { SidebarItem } from './SidebarItem'
import { cn } from '@/lib/utils'
import { openSettings } from '@/store/slices/modals/settings.slice'
import { useRouter } from 'next/navigation'

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { collapsed, mobile, isOpen } = useSelector(
    (state: RootState) => state.sidebar,
  )

  const toggleSidebar = useCallback(() => {
    dispatch(setCollapsed(!collapsed))
    if (mobile) {
      dispatch(setIsOpen(!isOpen))
    }
  }, [dispatch, collapsed, mobile, isOpen])

  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth <= 640
    dispatch(setMobile(isMobile))
  }, [dispatch])

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
        onMouseEnter={() => dispatch(setCollapsed(false))}
        onMouseLeave={() => dispatch(setCollapsed(true))}
        className={cn(
          'fixed z-40 flex min-h-screen flex-col items-center bg-gray-900 text-white transition-[width] duration-300',
          collapsed ? (mobile ? 'w-12' : 'w-16') : 'w-64 items-start',
          mobile && isOpen ? 'w-full' : mobile ? 'w-12' : '',
        )}
      >
        <SidebarHeader
          mobile={mobile}
          isOpen={isOpen}
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
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
