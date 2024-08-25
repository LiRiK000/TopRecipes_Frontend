import { ClientAuthProvider } from '@/components/providers'
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
    <ClientAuthProvider>
      <main className="size-full">
        {children}
        <Toaster />
      </main>
    </ClientAuthProvider>
  )
}
