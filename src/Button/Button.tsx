import {Icon} from '../index';
import classNames from 'classnames';
import React, { forwardRef } from 'react';
import './index.css';

type nativeProps = React.ButtonHTMLAttributes<HTMLElement> &
  React.AnchorHTMLAttributes<HTMLElement>;

interface ButtonProps extends Partial<nativeProps> {
  className?: string;
  disabled?: boolean;
  size?: 'lg' | 'sm' | 'md';
  btnType?: 'primary' | 'default' | 'danger' | 'link';
  loading?: boolean;
}

type ButtonExp = HTMLButtonElement & HTMLAnchorElement

const Button = forwardRef<ButtonExp, ButtonProps>((props, ref) => {
  const {
    className,
    btnType,
    children,
    href,
    size='md',
    disabled = false,
    loading = false,
    onClick,
    ...others } = props;

  const clas = classNames('cat-button', {
    [`cat-btn-${btnType}`]: btnType,
    [`cat-btn-${size}`]: size,
    'cat-btn-disabled': disabled,
    [className as string]: !!className,
  });

  function click(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if(disabled) return
    if(loading) return
    if(onClick) onClick(e)
  }

  const config = {
    className: clas,
    onClick: click,
    ref,
    ...others
  }


  const iconSize =
    size === 'lg' ? '21' :
    size === 'sm' ? '13' : '16'

  const Loading = loading ? <Icon name='loading' className='cat-loading' size={iconSize}  />: null

  if (btnType === 'link') {
    return (
      <a href={disabled ? undefined : href} {...config} >
        {children}{Loading}
      </a>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button disabled={disabled} {...config} >
      {children}{Loading}
    </button>
  );
});

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
