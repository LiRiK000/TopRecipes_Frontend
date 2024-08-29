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
    <section
      id="main"
      className="relative flex size-full min-h-screen min-w-[100vw] items-center justify-center bg-primary-foreground"
    >
      <div className="blob blob-large blob-light dark:blob-dark left-1/2 top-1/2" />
      <div className="blob blob-small blob-dark dark:blob-light left-1/4 top-1/2" />

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-y-3 rounded-md p-6 px-6 py-12 backdrop-blur-sm"
      >
        <div className="flex scale-150 flex-col items-center gap-y-3">
          <h1 className="font-logo-font text-8xl leading-snug text-black dark:text-white">
            TopRecipes
          </h1>
          <Label className="font-manrope bg-clip-text text-center text-xl leading-snug text-black dark:text-white">
            <span className="font-logo-font text-3xl">TopRecipes</span> - a
            convenient tool for managing recipes
          </Label>
          <Button
            disabled
            onClick={() => {
              dispatch(openLogin())
            }}
            className="px-6 py-1 text-base"
            size="lg"
          >
            Start
          </Button>
        </div>
      </m.div>
    </section>
  )
}
