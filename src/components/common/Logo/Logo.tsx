import { m } from 'framer-motion'
import Image from 'next/image'

import style from './Logo.module.css'

interface ILogo {
  isImage: boolean
}

export const Logo = ({ isImage = true }: ILogo) => {
  return (
    <m.div
      className={style.logoContainer}
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
      <h1 className={style.logoText}>TopRecipes</h1>
    </m.div>
  )
}
