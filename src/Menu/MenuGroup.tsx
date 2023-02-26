import classNames from 'classnames';
import React, { CSSProperties, FC, ReactNode } from 'react';
import { SubMenuProps } from './SubMenu';
import './index.css';
import { MenuContext, useMenu } from './useMenu';


/**
 * 克隆children
 */
function newChildren(props: MenuProps) {
  const { children } = props;

  return React.Children.map(children, (c, i) => {
    const child = c as React.FunctionComponentElement<SubMenuProps>;

    return React.cloneElement(child, {
      name: child.props.name || String(i),
      path: child.props.name || String(i),
      lv: 1,
    });
  });
}

export type MenuModeType = 'inline' | 'vertical' | 'horizon';
export interface MenuProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  /**
   * inline 模式的菜单缩进宽度
   */
  inlineIndent?: number;
  /**
   * 被选中时调用	
   */
  onSelect?: (args: any) => any;
  /**
   * 菜单类型，现在支持垂直、水平、和内嵌模式三种
   */
  mode?: MenuModeType;
}

const Menu: FC<MenuProps> = (props) => {
  const { className, style, mode } = props;
  const clas = classNames('cat-menu', className, {
    'cat-menu-horizon': mode === 'horizon',
  });
  const menuContext = useMenu(props);

  return (
    <MenuContext.Provider value={menuContext}>
      <ul className={clas} style={style}>
        {newChildren(props)}
      </ul>
    </MenuContext.Provider>
  );
};
Menu.defaultProps = {
  inlineIndent: 20,
  mode: 'inline',
};
export default Menu;

