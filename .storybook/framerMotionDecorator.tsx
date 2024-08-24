import { Decorator } from '@storybook/react'
import LazyMotionProvider from '../src/components/Providers/LazyMotionProvider'
import React from 'react'

export const framerMotionDecorator: Decorator = Story => {
  if (process.env.LOKI === 'true') {
    document.body.classList.add('disable-animations')
  }
  return (
    <LazyMotionProvider>
      <Story />
    </LazyMotionProvider>
  )
}
