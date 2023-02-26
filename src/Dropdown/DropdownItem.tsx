import classNames from "classnames"
import { FC } from "react"

interface DropdownItemProps {
  disable?: boolean,
  danger?: boolean,
  children?: any,
  icon?: any,
}

const DropdownItem: FC<DropdownItemProps> = (props) => {
  const {children, icon, disable, danger} = props

  const clas = classNames('cat-dropdown-item', {
    'cat-dropdown-disable': disable,
    'cat-dropdown-danger': danger,
  })

  return <li className={clas} >
    {icon}
    <span>{children}</span>
  </li>
}

export default DropdownItem