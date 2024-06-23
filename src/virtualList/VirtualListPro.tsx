import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Fn, Item } from './type'
import { useDebounce, useTouchEnd, getMoreItems, getIndex } from './tools'

interface ListProps {
  height: number,
  data: any[],
  limit: number,
  renderItem: Fn,
  className?: string,
  renderLoading?: Function,
  getMore?: (...arg: any[]) => any
}

const List: FC<ListProps> = (props) => {
  const { limit, data, height } = props
  const [items, setItems] = useState<Item[]>([])
  const [cur, setCur] = useState(0)
  const refLoading = useRef<HTMLDivElement>(null)
  const getMore = useDebounce(props.getMore)

  useTouchEnd(refLoading, () => {
    getMore()
  })

  const containerH = useMemo(() => {
    if (items.length === 0) return '100%'
    return items[items.length - 1].bottom
  }, [items])

  const renderList = useMemo(() => {
    return data.slice(cur, cur + limit)
  }, [cur, data])

  const y = useMemo(() => {
    if (items.length === 0) {
      return 0
    }
    return items[cur].top
  }, [cur])


  useEffect(() => {
    if (data.length > items.length) {
      const newData = props.data.slice(items.length)
      getMoreItems(props.renderItem)(items, newData).then(its => {
        setItems(its)
      })
    }
  }, [data.length])

  const onScroll = (e: any) => {
    const index = getIndex(e.target.scrollTop, items)
    setCur(index)
  }

  const CList = renderList.map((info, i) => <div key={i}>{props.renderItem(info)}</div>)

  return (
    <div onScroll={onScroll} style={{ height, overflow: 'auto' }} className={props.className} >
      <div>
        <div style={{ height: containerH }} >
          <div style={{ transform: `translateY(${y}px)` }} >{CList}</div>
        </div>
        <div ref={refLoading} >
          {props?.renderLoading && props.renderLoading()}
        </div>
      </div>
    </div>
  )
}

export default List
