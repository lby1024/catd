import classNames from 'classnames';
import { FC, ReactNode, useContext } from 'react';
import { MenuContext } from './useMenu';

interface MenuItemProps {
  className?: string;
  children?: ReactNode;
  name?: string;
  path?: string;
  lv?: number;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, children, path, lv } = props;
  const {inlineIndent, curPath, mode, setCurPath} = useContext(MenuContext);
  const isCur = curPath === path;
  const padding = mode === 'inline' ? inlineIndent*lv! : inlineIndent;
  /**
   * background 高亮
   */
  function curBg() {
    if (!isCur) return false
    if (mode === 'vertical') return true;
    if (mode === 'inline') return true;
    if (mode === 'horizon' && lv! > 1) return true;
    else return false;
  }
  
  const clas = classNames('cat-menu-item', className, {
    'cat-menu-cur-txt': isCur, // 文字高亮
    'cat-menu-cur-right': mode === 'inline' && isCur, // border-right 高亮
    'cat-menu-cur-bottom': mode === 'horizon' && lv === 1 && isCur, // border-buttom 高亮
    'cat-menu-cur-bg': curBg(), // background 高亮
  });

  function click() {
    setCurPath(path!);
  }

  return (
    <li className={clas} style={{ paddingLeft: padding }} onClick={click}>
      {children}
    </li>
  );
};

export default MenuItem;
