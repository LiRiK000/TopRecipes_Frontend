import { Decorator } from '@storybook/react'
import { LazyMotionProvider } from '../src/components/Providers'
import React from 'react'

export const framerMotionDecorator: Decorator = Story => {
  return (
    <LazyMotionProvider>
      <Story />
    </LazyMotionProvider>
  )
}
