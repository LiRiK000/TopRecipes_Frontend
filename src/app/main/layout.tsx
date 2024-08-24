import { ClientAuthWrapper, ReduxProvider } from '@/components/Providers'

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
      <ClientAuthWrapper>
        <main>
          {children}
          <Toaster />
        </main>
      </ClientAuthWrapper>
    </ReduxProvider>
  )
}
