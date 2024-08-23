'use client'

import { useParams } from 'next/navigation'

const Page = () => {
  const { id } = useParams()

  return <>{id}</>
}

export default Page
