import {Calendar, Message} from "catd"

export default () => {

  function alert(d: Date) {
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate()
    Message.success(`${year}年${month}月${date}日`)
  }

  return (
    <Calendar onChange={d => alert(d)} />
  )
} 