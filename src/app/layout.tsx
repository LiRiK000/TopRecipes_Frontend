import './globals.css'

import {
  LazyMotionProvider,
  ModalProvider,
  ReduxProvider,
  ThemeProvider,
} from '@/components/providers'

import { Inter } from 'next/font/google'
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
        <ReduxProvider>
          <LazyMotionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ModalProvider />
              {children}
            </ThemeProvider>
          </LazyMotionProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
