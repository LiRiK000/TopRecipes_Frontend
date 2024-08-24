import cls from './Logo.module.css'
import dynamic from 'next/dynamic'
import { m } from 'framer-motion'

const Image = dynamic(() => import('next/image'), { ssr: true })

interface ILogo {
  isImage: boolean
}

export const Logo = ({ isImage = true }: ILogo) => {
  return (
    <m.div
      className={cls.logoContainer}
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isImage && (
        <Image
          src={'/logo/logo_b.svg'}
          alt={'logo'}
          width={96}
          height={96}
          className="pointer-events-none"
        />
      )}
      <h1 className={cls.logoText}>TopRecipes</h1>
    </m.div>
  )
}
