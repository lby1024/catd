import ReactDOM from 'react-dom'
import { useCallback, useEffect, useRef } from 'react'
import { Fn, Item } from './type'

/**
 * 触底触发getMore
 */
export function useTouchEnd(ref: React.RefObject<HTMLDivElement>, cb: Function) {
  useEffect(() => {
    const ob = new IntersectionObserver((its) => {
      const item = its[0]
      if (item.isIntersecting) {
        cb()
      }
    })

    if (ref.current) {
      ob.observe(ref.current)
    }

    return () => ob.disconnect()
  }, [])
}

export const getMoreItems = (renderItem: Fn) => async (items: Item[], newDatas: any[]) => {
  const heights = await getHeights(newDatas, renderItem)
  const newItems: Item[] = []
  const length = items.length + heights.length
  for (let i = 0; i < length; i++) {
    newItems[i] = createItem(i)
  }

  return newItems

  function createItem(index: number) {
    const hArr = [...items.map(item => item.height), ...heights]
    const item = items[index]
    if (item) {
      return item
    }
    const height = hArr[index]
    const top = getTop(index)
    const bottom = height + top
    return { height, top, bottom }

  }

  function getTop(i: number) {
    if (i === 0) return 0
    return newItems[i - 1].bottom
  }

}

export function useDebounce(cb: any, delay = 100) {
  const timer = useRef<any>(null)


  return useCallback(() => {
    if (typeof cb !== 'function') {
      return
    }

    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      cb()
      clearTimeout(timer.current)
    }, delay)

  }, [cb])

}

export function getIndex(scrollTop: number, items: Item[]) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.top < scrollTop && scrollTop <= item.bottom) {
      return i
    }
  }
  return 0
}

export async function getHeights(list: any[], renderItem: Fn): Promise<number[]> {
  const heights: number[] = []

  for (let i = 0; i < list.length; i++) {
    const height = await getH(list[i])
    heights.push(height)
  }

  return heights

  /**
   * 
   * @param item 卡片信息
   */
  function getH(item: any): Promise<number> {
    return new Promise((res) => {
      const card = renderItem(item)
      const div = document.createElement('div')
      div.style.visibility = 'hidden';
      div.style.position = 'fixed'
      div.style.left = '-1000000000000px'
      document.body.appendChild(div);
      // ReactDOM.createRoot(div).render(card);
      ReactDOM.render(card, div)
      setTimeout(() => {
        const h = div.clientHeight
        div.remove()
        res(h)
      }, 1)
    })
  }
}

