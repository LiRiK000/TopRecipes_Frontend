'use client'

import { Button } from '../ui/button'
import { Logo } from '../common/Logo/Logo'
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
      className="flex items-center justify-around bg-gray-400 px-2 py-6"
    >
      <Logo isImage={false} />
      <ul className="flex gap-x-6 text-2xl mr-22">
        <m.li variants={variants}>Get Started</m.li>
        <m.li variants={variants}>About</m.li>
        <m.li variants={variants}>Features</m.li>
      </ul>
      <m.div initial={{ x: 200 }} animate={{ x: 0 }} className="">
        <Button
          variant="outline"
          size="lg"
          className="w-32 h-14 text-xl bg-transparent hover:bg-[rgb(156,163,175)] hover:text-white hover:border-white border-black transition"
        >
          Log In
        </Button>
      </m.div>
    </m.nav>
  )
}
