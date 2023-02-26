import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { FC, ReactNode } from 'react';
import Icon from '../Icon';
import { MenuContext } from './useMenu';
import Popup from '../Popup';
import { MenuModeType } from './MenuGroup';

/**
 * 克隆children
 */
function useNewChildren(props: SubMenuProps) {
  const { children, path, lv } = props;

  return React.Children.map(children, (c, i) => {
    const child = c as React.FunctionComponentElement<SubMenuProps>;
    const name = child.props.name || String(i);

    return React.cloneElement(child, {
      name,
      path: `${path}-${name}`,
      lv: lv! + 1,
    });
  });
}
/**
 * 弹框显示位置
 */
function getPlacement(props: SubMenuProps, mode: MenuModeType) {
  const { lv } = props;
  if (mode === 'horizon' && lv! <= 1) return 'bottom';
  if (mode === 'horizon' && lv! > 1) return 'right';
  if (mode === 'vertical') return 'right';
}
/**
 * 弹框的宽度
 */
function useTitleWidth() {
  const [w, setW] = useState(0);

  function refCB(node: HTMLDivElement) {
    if (node) {
      setW(node.clientWidth);
    }
  }

  return [w, refCB] as const;
}

/**
 * return true 的条件:
 * 1: path 长度小于 curPath
 * 2: path 与 curPath 一一对应
 * 例子:
 * cuarPath = 1-2-3
 * path = 1-2
 * return true
 */
function getIsCur(curPath: string, path: string) {
  const cur = curPath.split('-');
  const p = path.split('-');
  if (p.length > cur.length) return false;
  for (let i = 0; i < p.length; i++) {
    if (cur[i] !== p[i]) return false;
  }
  return true;
}
/**
 * fold: 折叠
 */
function useFold() {
  const [fold, setFold] = useState(true);
  const {mode} = useContext(MenuContext);

  function click() {
    if (mode !== 'inline') return;
    setFold(!fold);
  }

  return [click, fold] as const;
}

interface ArrowProps {
  mode: MenuModeType
  fold: boolean;
  lv: number;
}

function Arrow(props: ArrowProps) {
  const { mode, fold, lv } = props;

  if (mode === 'horizon' && lv === 1) return null;

  if (mode === 'inline') {
    if (fold) return <Icon name="arrow-down-bold" />;
    else return <Icon name="arrow-up-bold" />;
  }

  return <Icon className="cat-sub-arrow-right" name="arrow-up-bold" />;
}


export interface SubMenuProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  name?: string;
  path?: string;
  lv?: number;
}

const SubMenu: FC<SubMenuProps> = (props) => {
  const { title, path, lv } = props;
  const {mode, inlineIndent, curPath} = useContext(MenuContext);
  const [titleWidth, titleRefCB] = useTitleWidth(); // 获取subTitle 宽度
  const newChildren = useNewChildren(props); // 克隆children
  const [click, fold] = useFold(); // 是否折叠
  const padding = mode === 'inline' ? inlineIndent * lv! : inlineIndent;
  const isCur = getIsCur(curPath, path!)

  const titleClass = classNames('cat-submenu-title', {
    'cat-menu-cur-txt': isCur,
    'cat-menu-cur-bottom': isCur && mode === 'horizon' && lv === 1,
  });
  const listClass = classNames('cat-submenu-list', {
    'cat-submenu-list-shadow': mode !== 'inline', // 是否显示阴影
    'cat-submenu-list-fold': mode === 'inline' && fold, // 是否折叠
  });

  const ItemTittle = (
    <div className={titleClass} style={{ paddingLeft: padding }} ref={titleRefCB} onClick={click}>
      <span>{title}</span>
      <Arrow mode={mode} fold={fold} lv={lv!} />
    </div>
  );

  const Over = (
    <ul className={listClass} style={{ width: titleWidth }}>
      {newChildren}
    </ul>
  );

  if (mode === 'inline') {
    return (
      <div>
        {ItemTittle}
        {Over}
      </div>
    );
  }

  return (
    <Popup overLay={Over} placement={getPlacement(props, mode)} space={9}>
      {/* 外面包了一层div是因为ItemTittle会被克隆, 防止 ref 被覆盖 */}
      <div>{ItemTittle}</div>
    </Popup>
  );
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
