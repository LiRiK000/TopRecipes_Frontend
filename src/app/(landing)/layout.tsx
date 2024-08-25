import type { Metadata } from 'next'
import { Navbar } from '@/components/pages/landing'

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
    <>
      <Navbar />
      <main className="size-full">{children}</main>
    </>
  )
}
