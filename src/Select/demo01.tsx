import { DropItem } from "catd/interface"
import { CSSProperties } from "react"
import Select from "./Select"

const options: DropItem[] = [
  {
    key: 'jack',
    label: 'Jack',
    value: 'jack'
  }, 
  {
    key: 'lucy',
    label: 'Lucy',
    value: 'lucy'
  }, 
  {
    key: 'tom',
    label: 'Tom',
    value: 'tom'
  }, 
  {
    key: 'tony',
    label: 'Tony',
    value: 'tony'
  }, 
]
export default () => {

  const style: CSSProperties = {
    marginRight: 12,
    marginBottom: 12
  }

  return <div>
    <Select options={options} style={style} />
    <Select options={options} style={style} defaultValue='tom' />
    <Select options={options} style={style} defaultValue='tom' disabled />
  </div>
}