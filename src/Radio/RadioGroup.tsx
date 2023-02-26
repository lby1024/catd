import React, { FC, ReactElement, useEffect, useState } from 'react';
import RadioItem from './RadioItem';

interface radioGroupProps {
  className?: string;
  /**
   * @description 用于设置当前选中的值
   */
  value?: string;
  /**
   * @description 选项变化时的回调函数
   */
  onChange?: (v: string) => void;
  children?: ReactElement[];
}

const RadioGroup: FC<radioGroupProps> = (props) => {
  const { children, className, value } = props;
  const [v, setV] = useState(value);

  useEffect(() => {
    if ('value' in props) {
      setV(value)
    }
  }, [value])

  const newChildren = React.Children.map(children, (child) => {
    if (child?.type !== RadioItem) {
      return null;
    }
    
    function onChange(value: string) {
      setV(value);
      if (typeof props.onChange === 'function') {
        props.onChange(value);
      }
    }

    return React.cloneElement(child, {
      checked: child.props.value === v,
      onChange,
    });
  });

  return <span className={className}>{newChildren}</span>;
};

export default RadioGroup;
