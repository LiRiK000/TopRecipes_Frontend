import { cn } from '@/lib/utils'

const SidebarItem = ({
  mobile,
  collapsed,
  text,
  IconEl,
  classNames,
  onClick,
}: {
  mobile: boolean
  collapsed: boolean
  classNames?: string
  text: string
  IconEl: React.ElementType
  onClick: () => void
}) => {
  return (
    <li
      role="button"
      className={cn(
        'flex w-full items-center px-4 py-2 transition-colors duration-300',
        !mobile && 'hover:bg-gray-700',
        classNames,
      )}
      onClick={onClick}
    >
      <span>
        {IconEl && (
          <IconEl className={cn(collapsed ? 'mr-0' : 'mr-4')} size={22} />
        )}
      </span>
      {!collapsed && <span className="transition-opacity">{text}</span>}
    </li>
  )
}

export default SidebarItem
