import Link from 'next/link'
import dynamic from 'next/dynamic'
import { m } from 'framer-motion'

const Image = dynamic(() => import('next/image'), { ssr: true })

interface ILogo {
  isImage?: boolean
  className?: string
}

export const Logo = ({ isImage = true, className }: ILogo) => {
  return (
    <m.div
      className="my-auto flex select-none items-center justify-center"
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        {isImage && (
          <Image
            src={'/logo/logo_b.svg'}
            alt={'logo'}
            width={96}
            height={96}
            className="pointer-events-none"
          />
        )}
        <h1 className={`pl-3 font-logo-font text-3xl sm:text-5xl ${className}`}>
          TopRecipes
        </h1>
      </Link>
    </m.div>
  )
}
