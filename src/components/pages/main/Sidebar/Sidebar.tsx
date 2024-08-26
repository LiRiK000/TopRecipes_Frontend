'use client'

import {
  HomeIcon,
  MenuIcon,
  SettingsIcon,
  TimerIcon,
  User2Icon,
} from 'lucide-react'
import React, { useState } from 'react'

import { Logo } from '@/components/common'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className="flex min-h-screen">
      <aside
        className={cn(
          'fixed min-h-screen bg-gray-900 text-white transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
        )}
      >
        <div className="flex items-center justify-between p-4">
          <button
            aria-label="Toggle sidebar"
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            {collapsed ? <MenuIcon size={24} /> : <TimerIcon size={24} />}
          </button>
          <span
            className={cn(
              'text-xl font-bold transition-opacity',
              collapsed && 'opacity-0',
            )}
          >
            <Logo className="cursor-pointer" isImage={false} />
          </span>
        </div>

        <nav className="mt-4">
          <ul className="flex cursor-pointer flex-col">
            <li className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-700">
              <HomeIcon className="mr-4" size={20} />
              <span
                className={cn('transition-opacity', collapsed && 'opacity-0')}
              >
                Home
              </span>
            </li>
            <li className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-700">
              <User2Icon className="mr-4" size={20} />
              <span
                className={cn('transition-opacity', collapsed && 'opacity-0')}
              >
                Profile
              </span>
            </li>
            <li className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-700">
              <SettingsIcon className="mr-4" size={20} />
              <span
                className={cn('transition-opacity', collapsed && 'opacity-0')}
              >
                Settings
              </span>
            </li>
          </ul>
        </nav>
      </aside>

      <main
        className={cn(
          'flex-1 p-4 transition-all duration-300',
          collapsed ? 'ml-16' : 'ml-64',
        )}
      >
        <div className="relative size-full flex-1 rounded-xl bg-primary-foreground p-4">
          {children}
        </div>
      </main>
    </div>
  )
}
