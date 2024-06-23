import { VirtualList } from "catd"
import styled from "styled-components"

const list = new Array(1000).fill(0).map((_, index) => index)

export default () => {

  return (
    <VirtualList
      data={list}
      height={200}
      itemHeight={62}
      renderItem={(item) => <Card>{item}</Card>}
      limit={7}
    />
  )
}

const Card = styled.div`
  height: 30px;
  background: #f7f9fb;
  color: #999;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
`