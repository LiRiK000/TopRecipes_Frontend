import { Logo } from '@/components/common/Logo/Logo'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

export const Footer = () => {
  return (
    <footer>
      <div>
        <TextHoverEffect text="Recipes" automatic />
      </div>
      <div className="mx-10 flex items-center justify-between">
        <Logo isImage={false} />
        <span> © 2024</span>
      </div>
    </footer>
  )
}
