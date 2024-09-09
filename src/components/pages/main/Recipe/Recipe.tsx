'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface RecipeProps {
  image: string
  name: string
  description: string
  author: string
  authorImage: string
  recipeId: string
  isPro?: boolean
}

export const Recipe = () => {
  return (
    <div
      className="group/card w-full max-w-xs"
      // onClick={() => {
      // router.push(`/recipe/${recipeId}`)
      // }}
      // role="button"
    >
      <div
        className={cn(
          'card backgroundImage relative mx-auto flex h-96 max-w-sm cursor-pointer flex-col justify-between overflow-hidden rounded-md p-4 shadow-xl',
          // TODO: bg image from backend
          'bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover',
        )}
      >
        <div className="absolute left-0 top-0 h-full w-full opacity-60 transition duration-300 group-hover/card:bg-black" />
        <div className="z-10 flex flex-row items-center space-x-4">
          {/* TODO: image from backend */}
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/test.png"
            className="size-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="relative z-10 text-base font-normal text-gray-50">
              John Doe
            </p>
            <p className="bg-gradient-to-r from-purple-300 to-pink-500 bg-clip-text text-base text-transparent">
              PRO
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="relative z-10 text-xl font-bold text-gray-50 md:text-2xl">
            Recipe Name
          </h1>
          <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
            Recipe Description
          </p>
        </div>
      </div>
    </div>
  )
}
