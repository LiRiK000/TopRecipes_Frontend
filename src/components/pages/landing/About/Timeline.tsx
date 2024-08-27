import React from 'react'
import { Timeline } from '@/components/ui/timeline'

export function AboutTimeLine() {
  const data = [
    {
      title: '23.08.24',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            TopRecipes TimeLine
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* TODO RECIPES IMAGES HERE */}
          </div>
        </div>
      ),
    },
    {
      title: '25.08.24',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            tempora repellendus esse atque nihil quod necessitatibus est iure
            veniam, rem a sed debitis, cupiditate odit eaque dolor. Illo, earum
            aliquid accusamus facere ex quas ipsum? Laborum, deleniti?
            Perferendis itaque quae autem eos velit at ex nostrum corrupti
            placeat nemo. Sint nesciunt perferendis placeat vel dignissimos,
            aliquam quibusdam iure beatae voluptate architecto, magnam
            asperiores quasi officiis quisquam, sunt ipsum dolorem.
            Reprehenderit repellat saepe neque, cumque alias aliquam, corrupti
            deleniti ea officiis blanditiis hic nihil magnam molestiae quia
            libero veritatis voluptatibus optio illo minima inventore quos quod
            animi nisi? Consectetur excepturi in rerum nobis fugiat sapiente
            iusto, incidunt numquam fugit delectus exercitationem laudantium,
            cum repellendus doloremque eos obcaecati. Blanditiis omnis enim
            culpa temporibus nesciunt quia vel, a accusantium beatae ea quae
            qui, consectetur ipsum accusamus eius. Magni veniam minus ab,
            asperiores distinctio porro, debitis provident dolorum doloremque
            numquam quae eveniet excepturi. Laboriosam.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            tempora repellendus esse atque nihil quod necessitatibus est iure
            veniam, rem a sed debitis, cupiditate odit eaque dolor. Illo, earum
            aliquid accusamus facere ex quas ipsum? Laborum, deleniti?
            Perferendis itaque quae autem eos velit at ex nostrum corrupti
            placeat nemo. Sint nesciunt perferendis placeat vel dignissimos,
            aliquam quibusdam iure beatae voluptate architecto, magnam
            asperiores quasi officiis quisquam, sunt ipsum dolorem.
            Reprehenderit repellat saepe neque, cumque alias aliquam, corrupti
            deleniti ea officiis blanditiis hic nihil magnam molestiae quia
            libero veritatis voluptatibus optio illo minima inventore quos quod
            animi nisi? Consectetur excepturi in rerum nobis fugiat sapiente
            iusto, incidunt numquam fugit delectus exercitationem laudantium,
            cum repellendus doloremque eos obcaecati. Blanditiis omnis enim
            culpa temporibus nesciunt quia vel, a accusantium beatae ea quae
            qui, consectetur ipsum accusamus eius. Magni veniam minus ab,
            asperiores distinctio porro, debitis provident dolorum doloremque
            numquam quae eveniet excepturi. Laboriosam.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* TODO RECIPES IMAGES HERE */}
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full px-4">
      <Timeline data={data} />
    </div>
  )
}
