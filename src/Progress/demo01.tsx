
import {Progress} from 'catd'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  marginTop: 9
}

export default () => {
  return <div style={{width: '50%'}} >
    <Progress percent={30} style={style} />
    <Progress percent={50} style={style} />
    <Progress percent={80} style={style} bgColor='rgb(255, 77, 79)' />
    <Progress percent={100} style={style} bgColor='rgb(82, 196, 26)' />
    <Progress percent={50} style={style} showText={false} height={5} />
  </div>
}