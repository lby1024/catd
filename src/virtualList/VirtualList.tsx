import { FC, cloneElement, useState } from "react";
import styled from "styled-components";

interface VirtualListProps {
  /**
   * 列表的高度
   */
  height: number
  /**
   * item的高度
   */
  itemHeight: number
  /**
   * 列表数据
   */
  list: any[]
  /**
   * 渲染的item
   */
  renderItem: (item: any, index: number) => JSX.Element
  /**
   * 需要渲染的item的数量
   */
  count: number
}

const VirtualList: FC<VirtualListProps> = (props) => {
  const { list, renderItem, height, count, itemHeight } = props;
  const [start, setStart] = useState(0)
  const [translateY, setTranslateY] = useState(0)

  const onscroll = (e: any) => {
    const { scrollTop } = e.target
    const start = Math.floor(scrollTop / itemHeight)
    setStart(start)
    setTranslateY(start * itemHeight)
  }

  const List = list.slice(start, start + count).map((item, index) => {
    return cloneElement(renderItem(item, index), { key: index })
  });

  return (
    <Content style={{ height }} onScroll={onscroll}>
      <div className="long" style={{ height: list.length * itemHeight }} >
        <div className="render" style={{ transform: `translateY(${translateY}px)` }} >{List}</div>
      </div>
    </Content>
  )
}

export default VirtualList;

const Content = styled.div`
  overflow-y: scroll;
`
