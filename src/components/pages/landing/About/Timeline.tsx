import React from 'react'
import { Timeline } from '@/components/ui/timeline'

export function AboutTimeLine() {
  const data = [
    {
      title: 'August 2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Start of coding TopRecipes service
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* TODO RECIPES IMAGES HERE */}
          </div>
        </div>
      ),
    },
  ]
  return (
    <section id="about" className="w-full px-4">
      <Timeline data={data} />
    </section>
  )
}
