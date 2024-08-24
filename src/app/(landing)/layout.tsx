import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'TopRecipes',
  description: 'TopRecipes - a convenient tool for managing recipes',
}

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme=""
      enableSystem
      disableTransitionOnChange
    >
      <main>{children}</main>
    </ThemeProvider>
  )
}
