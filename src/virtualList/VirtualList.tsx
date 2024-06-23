import { FC, cloneElement, useState, useRef } from "react";
import styled from "styled-components";
import { useTouchEnd } from "./tools";

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
  data: any[]
  /**
   * 渲染的item
   */
  renderItem: (item: any, index: number) => JSX.Element
  /**
   * 需要渲染的item的数量
   */
  limit: number
  /**
   * 渲染的loading
   */
  renderLoading?: Function,
  /**
   * 触底获取更多数据
   */
  getMore?: (...arg: any[]) => any
  className?: string,
}

const VirtualList: FC<VirtualListProps> = (props) => {
  const { data, renderItem, height, limit, itemHeight, getMore } = props;
  const [start, setStart] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const refLoading = useRef<HTMLDivElement>(null)

  useTouchEnd(refLoading, () => {
    getMore && getMore()
  })

  const onscroll = (e: any) => {
    const { scrollTop } = e.target
    const start = Math.floor(scrollTop / itemHeight)
    setStart(start)
    setTranslateY(start * itemHeight)
  }

  const List = data.slice(start, start + limit).map((item, index) => {
    return cloneElement(renderItem(item, index), { key: index })
  });

  return (
    <Content style={{ height }} onScroll={onscroll}>
      <div>
        <div className="long" style={{ height: data.length * itemHeight }} >
          <div className="render" style={{ transform: `translateY(${translateY}px)` }} >{List}</div>
        </div>
        <div ref={refLoading} >{props.renderLoading && props.renderLoading()}</div>
      </div>
    </Content>
  )
}

export default VirtualList;

const Content = styled.div`
  overflow-y: scroll;
`
