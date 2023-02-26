import { useState } from "react"
import { CalendarDate } from "../index"

export function isSameDay(date1: Date, date2: Date) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()
}

export function createDay(date?: Date, flag: CalendarDate['flag'] = 'cur') {
  if(!date) return 
  const today = new Date()
  return {
    date: date,
    key: date.getTime(),
    disabled: false,
    flag,
    today: isSameDay(date, today),
  }
}

class MyDate {
  native: Date
  year: number
  month: number
  date: number
  week: number

  constructor(date: Date) {
    this.native = date
    this.year = this.getYear(date)
    this.month = this.getMonth(date)
    this.date = this.getDate(date)
    this.week = this.getWeek(date)
  }
  // 获取某年某月最后一天
  getLastDay(year: number, month: number) {
    return new Date(year, month, 0)
  }
  getYear(date: Date) {
    return date.getFullYear()
  }
  getMonth(date: Date) {
    return date.getMonth() + 1
  }
  getDate(date: Date) {
    return date.getDate()
  }
  getWeek(date: Date) {
    let week = date.getDay()
    return week === 0 ? 7 : week
  }
}

class CalendarObj extends MyDate {
  dates: CalendarDate[] = []

  constructor(date: Date) {
    super(date)
    this.getDays()
  }
  // 下一个月最后一天 
  nextMonth() {
    let month = this.month + 1
    let year = this.year
    if (month > 12) {
      month = 1
      year++
    }
    return this.getLastDay(year, month)
  }
  // 上一个月最后一天
  prevMonth() {
    let month = this.month - 1
    let year = this.year
    if (month <= 0) {
      month = 12
      year--
    }
    return this.getLastDay(year, month)
  }
  // 上一年
  nextYear() {
    let year = this.year + 1
    return this.getLastDay(year, this.month)
  }
  // 下一年
  prevYear() {
    let year = this.year - 1
    return this.getLastDay(year, this.month)
  }

  getDays() {
    this.addCur()
    this.addPrev()
    this.addNext()
  }

  private addCur() {
    const lastDay = this.getLastDay(this.year, this.month).getDate()  // 这个月最后一天

    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(`${this.year}/${this.month}/${day}`)
      const someDay = createDay(date, 'cur')
      this.dates.push(someDay!)
    }
  }

  private addPrev() {
    const prevMonth = this.prevMonth() // 上个月最后一天
    const week = this.getWeek(prevMonth)  // 上个月最后一天是周几
    const lastDay = this.getDate(prevMonth) // 上个月最后一天是几号

    for (let day = lastDay; day > lastDay - week; day--) {
      const year = this.getYear(prevMonth)
      const month = this.getMonth(prevMonth)
      const date = new Date(`${year}/${month}/${day}`)
      const someDay = createDay(date, 'prev')
      this.dates.unshift(someDay!)
    }
  }

  private addNext() {
    const nextMonth = this.nextMonth() // 下一个月某天的日期对象
    const times = 42 - this.dates.length

    for (let day = 1; day <= times; day++) {
      const year = this.getYear(nextMonth)
      const month = this.getMonth(nextMonth)
      const date = new Date(`${year}/${month}/${day}`)
      const someDay = createDay(date, 'next')
      this.dates.push(someDay!)
    }
  }
}

export function useCalendar(date: Date) {
  const [calendar, setC] = useState(new CalendarObj(date))

  return {
    dates: calendar.dates,
    year: calendar.year,
    month: calendar.month,
    nextMonth() {
      const date = calendar.nextMonth()
      setC(new CalendarObj(date))
    },
    prevMonth() {
      const date = calendar.prevMonth()
      setC(new CalendarObj(date))
    },
    nextYear() {
      const date = calendar.nextYear()
      setC(new CalendarObj(date))
    },
    prevYear() {
      const date = calendar.prevYear()
      setC(new CalendarObj(date))
    }
  }
}
