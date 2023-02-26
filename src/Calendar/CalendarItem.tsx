import { CalendarDate } from "../index";
import { FC } from "react";
import classNames from "classnames";

interface CalendarItemProps {
  item: CalendarDate,
  onClick: (item: CalendarDate) => any,
  select: boolean, // 是否被选中
  disabled: boolean,  // 是否可选
}

const CalendarItem: FC<CalendarItemProps> = (props) => {
  const {item, onClick, select, disabled} = props

  const clas = classNames('cat-calendar-day', {
    'cat-calendar-cur-month': item.flag === 'cur',
    'cat-calendar-today': item.today,
    'cat-calendar-select': select,
    'cat-calendar-disabled': disabled
  })

  function click() {
    if(disabled) return
    onClick(item)
  }

  return <div className={clas} >
    <span onClick={click} >{item.date.getDate()}</span>
  </div>
}

export default CalendarItem