import { ClientAuthProvider } from '@/components/providers'
import type { Metadata } from 'next'
import { Sidebar } from '@/components/pages/main'
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
    <ClientAuthProvider>
      <Sidebar>{children}</Sidebar>
      <Toaster />
    </ClientAuthProvider>
  )
}
