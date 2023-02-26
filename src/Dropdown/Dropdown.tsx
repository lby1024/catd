import { FC, ReactElement, useRef } from 'react';
import {Popup, DropItem, PopupExp} from '../index';
import DropdownItem from './DropdownItem';
import classNames from 'classnames';
import './index.css';

interface DropdownProps {
  /**
   * @description 菜单配置项
   * @type DropItem[ ]
   */
  menu: DropItem[],
  children: ReactElement,
  /**
   * @description 触发方式
   * @type 'click' | 'hover'
   * @default 'hover'
   */
  trigger?: 'click' | 'hover',
  /**
   * 失效
   */
  disable?: boolean,
  /**
   * 选择时触发
   */
  onChoose?: (res: DropItem) => any
}

const Dropdown: FC<DropdownProps> = (props) => {
  const {children, menu, onChoose, disable, trigger='hover'} = props
  const PopupRef = useRef<PopupExp>(null)
  const clasList = classNames('cat-dropdown-list', 'cat-shadown')

  if (disable) {
    return children
  }

  const choose = (item: DropItem) => {
    if(item.disable) return
    if (onChoose) onChoose(item)
    PopupRef.current?.setVisible(false)
  }

  const List = <ul className={clasList}>
    {
      menu.map(item =>
        <div key={item.key} onClick={() => choose(item)} >
          <DropdownItem disable={item.disable} danger={item.danger}>{item.label}</DropdownItem>
        </div>
      )
    }
  </ul>

  return <Popup overLay={List} trigger={trigger} placement="bottom" space={3} ref={PopupRef} >
    {children}
  </Popup>
}

export default Dropdown;


