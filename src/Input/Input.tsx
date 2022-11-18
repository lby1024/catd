import classNames from 'classnames';
import React, { FC, forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import { IconProps } from '../Icon/Icon';
import './index.css';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;
export interface InputProps extends Omit<NativeInputProps, 'size' | 'prefix'> {
  className?: string;
  disabled?: boolean;
  size?: 'large' | 'small' | 'default';
  addOnBeefore?: string | ReactElement;
  addOnAfter?: string | ReactElement;
  prefix?: string | ReactElement;
  suffix?: string | ReactElement;
}

const Input = forwardRef<HTMLElement, InputProps>((props, ref) => {
  const { className, disabled, size, addOnBeefore, addOnAfter, suffix, prefix, style, ...others } =
    props;

  const clas = classNames('cat-input', className, {
    'cat-input-diabled': disabled,
    [`cat-input-${size}`]: size,
  });
  const leftClass = classNames('cat-input-label cat-input-left');
  const rightClass = classNames('cat-input-label cat-input-right');
  const prefixClass = classNames('cat-input-fix cat-input-prefix');
  const suffixClass = classNames('cat-input-fix cat-input-suffix');

  return (
    <span className={clas} style={style} ref={ref}>
      {addOnBeefore && <span className={leftClass}>{addOnBeefore}</span>}
      <span className="cat-input-mid">
        {prefix && <span className={prefixClass}>{prefix}</span>}
        <input {...others} />
        {suffix && <span className={suffixClass}>{suffix}</span>}
      </span>
      {addOnAfter && <span className={rightClass}>{addOnAfter}</span>}
    </span>
  );
});

export default Input;
