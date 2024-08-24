'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

import type { PropsWithChildren } from 'react'

const LazyMotionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

export default LazyMotionProvider
