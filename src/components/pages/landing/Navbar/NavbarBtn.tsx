'use client'

import { Button } from '@/components/ui/button'
import { m } from 'framer-motion'

export const NavbarBtn = ({
  text,
  onClick,
}: {
  text: string
  onClick: () => void
}) => {
  return (
    <m.div initial={{ x: 400 }} animate={{ x: 0 }}>
      <Button
        variant="outline"
        size="lg"
        onClick={onClick}
        className="hidden border-black bg-transparent text-xl transition hover:bg-black hover:text-white sm:flex sm:h-10 sm:w-24"
      >
        <span>{text}</span>
      </Button>
    </m.div>
  )
}
