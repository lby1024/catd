import { CSSProperties, FC, useState } from 'react';
import { createDay, useCalendar } from './tool';
import classNames from 'classnames';
import {CalendarDate, Icon} from '../index';
import CalendarItem from './CalendarItem';
import './index.css';

interface CalendarProps {
  className?: string
  /**
   * @description css样式
   * @type: CSSProperties
   */
  style?: CSSProperties
  /**
   * @description 默认展示的日期	
   * @type Date
   */
  defaultValue?: Date,
  /**
   * @description 展示日期
   * @type Date
   */
  value?: Date,
  onChange?: (date: Date) => void,
  /**
   * @description 不可选日期
   * @type (date: Date) => boolean
   */
  disableDate?: (date: Date) => boolean
}

const Calendar: FC<CalendarProps> = (props) => {
  const { defaultValue, value, className, style, onChange, disableDate } = props
  const {year, month, dates, nextMonth, prevMonth, nextYear, prevYear} = useCalendar(defaultValue||value||new Date())
  const selectedOne = createDay(defaultValue||value)
  const [selectedItem, choose] = useState<CalendarDate|undefined>(selectedOne)
  const clas = classNames('cat-calendar', 'cat-shadown', className)

  function onchange(item: CalendarDate) {
    choose(item)
    if(onChange) onChange(item.date)
  }

  const Weeks = ['一', '二', '三', '四', '五', '六', '七'].map(day => {
    return <span className='cat-calendar-week' key={day} >{day}</span>
  })

  function isDisabled(item: CalendarDate) {
    if (disableDate) {
      return disableDate(item.date)
    }
    return false
  }

  const Days = dates.map(item => {
    return (
      <CalendarItem
        disabled={isDisabled(item)}
        select={selectedItem?.key === item.key}
        item={item}
        onClick={onchange}
        key={item.key} />
    )
  })

  const CalendarHead = 
    <div className='cat-calendar-head' >
      <Icon name='jiantou_yemian_xiangzuo' size='21' className='icon' onClick={prevYear} />
      <Icon name='jiantou_liebiaoxiangzuo' size='21' className='icon' onClick={prevMonth} />
      <i>{year} 年 {month} 月</i>
      <Icon name='jiantou_liebiaoxiangyou' size='21' className='icon' onClick={nextMonth} />
      <Icon name='jiantou_yemian_xiangyou' size='21' className='icon' onClick={nextYear} />
    </div>

  return (
    <div className={clas} style={style} >
      {CalendarHead}
      <div className='cat-calendar-days' >
        {Weeks}
        {Days}  
      </div>
    </div>
  )
}

export default Calendar;
