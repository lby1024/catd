import classNames from 'classnames';
import { FC } from 'react';
import { CSSProperties } from 'styled-components';
import './index.css'

export interface ProgressProps {
  className?: string
  /**
   * 百分比
   */
  percent?: number
  /**
   * 进度条高度 或 圆环高度
   */
  height?: number
  /**
   * @description 是否显示文字
   * @default 'true'
   */
  showText?: boolean
  /**
   * @description 进度条颜色
   * @default '#1890ff'
   */
  bgColor?: string
  /**
   * @description 文字颜色
   * @default "#fff"
   */
  color?: string
  /**
   * @description 类型，可选 line circle
   * @default "line"
   * @type 'circle' | 'line'
   */
  type?: 'circle' | 'line'
  /**
   * @description 圆环的环宽
   */
  border?: number
  /**
   * @type CSSProperties 
   */
  style?: CSSProperties
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    className,
    percent=0,
    height = props.type === 'circle' ? 100 : 16,
    showText = true,
    bgColor ='#1890ff',
    color = '#ffffff',
    type = 'line',
    border = 15,
    style
  } = props

  const clas = classNames('cat-progress', className, {
    [`cat-progress-${type}`]: type
  })

  function getOutStyle (type: ProgressProps['type']):CSSProperties {
    if (type === 'circle') {
      return {
        width: height,
        height: height,
        background: `conic-gradient(${bgColor} ${3.6 * percent}deg, #f1f1f1 0)`,
        ...style
      }
    }
    return {
      height,
      borderRadius: height / 2,
      ...style    
    }
  } 

  function getInnerStyle(type: ProgressProps['type']): CSSProperties {
    if (type === 'circle') {
      let w = height-border*2
      if(w<0) w = 0
      return {
        width: w,
        height: w,
      }
    }
    return {
      color,
      backgroundColor: bgColor,
      width: `${percent}%`,
      borderRadius: height/2
    }
  }

  const outStyle = getOutStyle(type)
  const innerStyle = getInnerStyle(type)

  return <div className={clas} style={outStyle} >
    <div className='inner' style={innerStyle} >
      {showText && <span>{percent}%</span>}
    </div>
  </div>;
}

export default Progress;
