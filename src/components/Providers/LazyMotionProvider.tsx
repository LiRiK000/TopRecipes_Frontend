'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

import { PropsWithChildren } from 'react'

export interface LazyMotionProviderProps {}

const LazyMotionProvider: React.FC<
  PropsWithChildren<LazyMotionProviderProps>
> = ({ children }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

export default LazyMotionProvider
