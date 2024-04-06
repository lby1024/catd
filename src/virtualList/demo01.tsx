import { VirtualList } from "catd"
import styled from "styled-components"

const list = new Array(1000).fill(0).map((_, index) => index)

export default () => {

  return (
    <VirtualList
      list={list}
      height={300}
      itemHeight={62}
      renderItem={(item) => <Card>{item}</Card>}
      count={7}
    />
  )
}

const Card = styled.div`
  height: 30px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`