import { ClientAuthProvider, ReduxProvider } from '@/components/providers'

import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'TopRecipes',
  description: 'TopRecipes - a convenient tool for managing recipes',
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReduxProvider>
      <ClientAuthProvider>
        <main>
          {children}
          <Toaster />
        </main>
      </ClientAuthProvider>
    </ReduxProvider>
  )
}
