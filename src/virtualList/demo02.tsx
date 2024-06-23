import { VirtualList } from "catd"
import styled from "styled-components"
import { useList } from "./demo.tool"


export default () => {
  const [list, getMore] = useList()

  return (
    <VirtualList
      data={list}
      height={200}
      itemHeight={62}
      renderItem={(item) => <Card>{item.id}</Card>}
      getMore={getMore}
      renderLoading={() => <div>loading...</div>}
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