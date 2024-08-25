'use client'

import { Logo } from '../../common/Logo/Logo'
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
      className={cls.navContainer}
    >
      <Logo isImage={false} />
      <ul className={cls.navList}>
        <m.li variants={variants}>Get Started</m.li>
        <m.li variants={variants}>About</m.li>
        <m.li variants={variants}>Features</m.li>
      </ul>
      <NavbarBtn
        onClick={() => {
          dispatch(openLogin())
        }}
        text={'Log In'}
      />
    </m.nav>
  )
}
