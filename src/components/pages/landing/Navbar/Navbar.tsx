// TODO: fix navbar
'use client'

import Link from 'next/link'
import { Logo } from '../../../common/Logo/Logo'
import { NavbarBtn } from './NavbarBtn'
import cls from './Navbar.module.css'
import { m } from 'framer-motion'
import { openLogin } from '@/store/slices/modals/login.slice'
import { useDispatch } from 'react-redux'

export const Navbar = () => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const dispatch = useDispatch()

  return (
    <m.nav
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
      className={`${cls.navContainer} flex max-w-full items-center justify-between`}
    >
      <m.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      >
        <Logo />
      </m.div>
      <ul className={`${cls.navList} flex flex-grow justify-center`}>
        <m.li variants={variants} className="mx-4">
          <Link href="#main">Get Started</Link>
        </m.li>
        <m.li variants={variants} className="mx-4">
          <Link href="#features">Features</Link>
        </m.li>
        <m.li variants={variants} className="mx-4">
          <Link href="#about">About Us</Link>
        </m.li>
      </ul>
      <NavbarBtn
        onClick={() => {
          dispatch(openLogin())
        }}
        text={'Login'}
        className="flex-shrink-0"
      />
    </m.nav>
  )
}
