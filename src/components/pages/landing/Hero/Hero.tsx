'use client'

import { Label } from '@/components/ui/label'
import React from 'react'

export const Hero = () => {
  return (
    <section className="relative flex size-full items-center justify-center bg-primary-foreground">
      <div className="blob blob-large blob-light dark:blob-dark left-1/2 top-1/2" />
      <div className="mx-auto max-w-3xl rounded-md bg-foreground/50 px-6 py-12 text-center backdrop-blur-sm">
        <h1 className="font-manrope bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-6xl leading-snug text-transparent">
          TopRecipes
        </h1>
        <Label className="font-manrope bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-2xl leading-snug text-transparent">
          TopRecipes - a convenient tool for managing recipes
        </Label>
      </div>
    </section>
  )
}
