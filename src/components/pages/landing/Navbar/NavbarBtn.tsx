'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { m } from 'framer-motion'

export const NavbarBtn = ({
  text,
  onClick,
  className,
}: {
  text: string
  onClick: () => void
  className?: string
}) => {
  return (
    <m.div initial={{ x: 400 }} animate={{ x: 0 }}>
      <Button
        disabled
        variant="outline"
        size="lg"
        onClick={onClick}
        className={cn(
          'hidden border-black bg-transparent text-xl transition hover:bg-black hover:text-white sm:flex sm:h-10 sm:w-24',
          className,
        )}
      >
        <span>{text}</span>
      </Button>
    </m.div>
  )
}
