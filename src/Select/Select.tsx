import {Dropdown, DropItem, Icon, Input} from '../index';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { getDefault } from './tool';
import classNames from 'classnames';
import './index.css'

export interface SelectProps {
  /**
   * 初始值
   */
  defaultValue?: any,
  /**
   * 指定当前选中的条目
   */
  value?: any,
  /**
   * 配置项
   */
  options: DropItem[],
  /**
   * 选择框默认文本	
   */
  placeholder?: string,
  /**
   * css 属性
   */
  style?: CSSProperties,
  /**
   * 是否禁用
   */
  disabled?: boolean,
  /**
   * 选中 option，调用此函数
   */
  onChange?: (v: any) => any,
}
const Select: FC<SelectProps> = (props) => {
  const { options, value, onChange, style, disabled, placeholder='请选择' } = props
  const [v, setV] = useState<DropItem|undefined>(getDefault(props))
  
  useEffect(() => {
    if (value in props) {
      setV(value)      
    }
  }, [value])
  
  const onChoose = (item: DropItem) => {
    setV(item)
    if(onChange) onChange(item.value)
  }

  const styl:CSSProperties = {
    display: 'inline-block',
    width: 120,
    ...style
  }

  const clasInput = classNames({
    'cat-select-input-disabled': disabled
  })

  return <Dropdown menu={options} trigger='click' onChoose={onChoose} disable={disabled} >
    {
      <Input value={v?.label||''}
        className={clasInput}
        style={styl}
        placeholder={placeholder}
        size='small'
        readOnly
        disabled={disabled}
        suffix={<Icon name='arrow-down-bold' />} />
    }
  </Dropdown>
}

export default Select;
