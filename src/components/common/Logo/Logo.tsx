import Link from 'next/link'
import dynamic from 'next/dynamic'

const Image = dynamic(() => import('next/image'), { ssr: true })

interface ILogo {
  isImage?: boolean
  className?: string
}

export const Logo = ({ isImage = true, className }: ILogo) => {
  return (
    <div className="relative my-auto select-none">
      <Link href="/" className="flex flex-nowrap items-center">
        {isImage && (
          <Image
            src={'/logo/logo_b.svg'}
            alt={'logo'}
            width={96}
            height={96}
            className="pointer-events-none text-white dark:text-black"
          />
        )}
        <h1 className={`pl-3 font-logo-font text-3xl sm:text-5xl ${className}`}>
          TopRecipes
        </h1>
      </Link>
    </div>
  )
}
