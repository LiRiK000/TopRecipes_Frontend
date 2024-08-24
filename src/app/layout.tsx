import './globals.css'

import { Inter } from 'next/font/google'
import { LazyMotionProvider } from '@/components/providers'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TopRecipes',
  description: 'TopRecipes - a convenient tool for managing recipes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <LazyMotionProvider>{children}</LazyMotionProvider>
      </body>
    </html>
  )
}
