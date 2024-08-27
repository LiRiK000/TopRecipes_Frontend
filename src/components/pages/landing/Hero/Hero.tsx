'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
// import { Logo } from '../../../common/Logo/Logo'
import React from 'react'
import { m } from 'framer-motion'
import { openLogin } from '@/store/slices/modals/login.slice'
import { useDispatch } from 'react-redux'

export const Hero = () => {
  const dispatch = useDispatch()

  return (
    <section className="relative flex size-full min-h-screen min-w-[100vw] items-center justify-center bg-primary-foreground">
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
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-y-3 rounded-md p-6 px-6 py-12 backdrop-blur-sm"
      >
        <div className="flex scale-150 flex-col items-center gap-y-3">
          {/* <Logo isImage={false} className="text-black dark:text-white" /> */}
          <h1 className="font-logo-font text-8xl leading-snug text-black dark:text-white">
            TopRecipes
          </h1>
          <Label className="font-manrope bg-clip-text text-center text-xl leading-snug text-black dark:text-white">
            TopRecipes - a convenient tool for managing recipes
          </Label>
          <Button
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
