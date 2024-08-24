'use client'

import { Button } from '@/components/ui/button'
import { m } from 'framer-motion'

export const NavbarBtn = ({ text }: { text: string }) => {
  return (
    <m.div initial={{ x: 400 }} animate={{ x: 0 }}>
      <Button
        variant="outline"
        size="lg"
        className="h-14 w-32 border-black bg-transparent text-xl transition hover:border-white hover:bg-[rgb(156,163,175)] hover:text-white"
      >
        <span>{text}</span>
      </Button>
    </m.div>
  )
}
