'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React from 'react'
import { m } from 'framer-motion'
import { openLogin } from '@/store/slices/modals/login.slice'
import { useDispatch } from 'react-redux'

export const Hero = () => {
  const dispatch = useDispatch()

  return (
    <section className="relative flex size-full items-center justify-center bg-primary-foreground">
      <div className="blob blob-large blob-light dark:blob-dark left-1/2 top-1/2" />
      <div className="blob blob-small blob-dark dark:blob-light left-1/4 top-1/2" />
      <m.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-8 top-1/3"
      >
        <m.img
          src="/cylinder.svg"
          alt=""
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </m.div>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-y-3 rounded-md bg-foreground/50 px-6 py-12 backdrop-blur-sm">
        <h1 className="font-manrope bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-6xl leading-snug text-transparent">
          TopRecipes
        </h1>
        <Label className="font-manrope bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-center text-2xl leading-snug text-transparent">
          TopRecipes - a convenient tool for managing recipes
        </Label>
        <Button
          onClick={() => {
            dispatch(openLogin())
          }}
          className="px-12 py-6 text-2xl"
          size="lg"
        >
          Start
        </Button>
      </div>
    </section>
  )
}
