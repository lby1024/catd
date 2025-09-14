import classNames from 'classnames';
import React, { CSSProperties, useState } from 'react';
import './iconfont.js';
import './index.css';

type nativeProps = React.SVGAttributes<SVGSVGElement>;
export interface IconProps extends Partial<nativeProps> {
  className?: string;
  name?: string;
  color?: string;
  size?: string;
  hoverColor?: string;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    className,
    name,
    size = '1em',
    color = 'currentColor',
    hoverColor,
    ...others
  } = props;
  const clas = classNames('cat-icon', className, {});
  const [fill, setFill] = useState(color);

  const style: CSSProperties = {
    width: size,
    height: size,
    fill,
  };

  function onMouseEnter(e: any) {
    if (hoverColor) setFill(hoverColor);
    if (others.onMouseEnter) {
      others?.onMouseEnter(e);
    }
  }

  function onMouseLeave(e: any) {
    if (color) setFill(color);
    if (others.onMouseLeave) {
      others?.onMouseLeave(e);
    }
  }

  return (
    <svg
      ref={ref}
      className={clas}
      aria-hidden="true" // 无障碍相关: 图标属于装饰性类容,不需要读出来
      {...others}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  );
});

export default Icon;
