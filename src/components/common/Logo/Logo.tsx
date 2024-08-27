import Link from 'next/link'

interface ILogo {
  className?: string
}

export const Logo = ({ className }: ILogo) => {
  return (
    <div className="relative my-auto select-none">
      <Link href="/" className="flex flex-nowrap items-center">
        <h1 className={`pl-3 font-logo-font text-3xl sm:text-5xl ${className}`}>
          TopRecipes
        </h1>
      </Link>
    </div>
  )
}
