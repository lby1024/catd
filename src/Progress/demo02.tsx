
import {Progress} from 'catd'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignItems: 'center',
  alignContent: 'space-around'
}

export default () => {
  return <div style={style} >
    <Progress type='circle' percent={30} />
    <Progress type='circle' percent={100} bgColor='rgb(82, 196, 26)' />
    <Progress type='circle' percent={50} bgColor='rgb(255, 77, 79)' />
    <Progress type='circle' percent={80} border={100} height={200} showText={false} bgColor="orange" />
  </div>
}