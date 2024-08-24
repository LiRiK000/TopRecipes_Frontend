'use client'

import { Logo } from '../../common/Logo/Logo'
import { NavbarBtn } from './NavbarBtn'
import cls from './Navbar.module.css'
import { m } from 'framer-motion'

export const Navbar = () => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }
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
      <NavbarBtn text="Log In" />
    </m.nav>
  )
}
