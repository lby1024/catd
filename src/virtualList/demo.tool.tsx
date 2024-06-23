import { CSSProperties, useRef, useState } from "react"

const arr = new Array(10000).fill(0).map((_, index) => ({
  id: index,
  style: getStyle()
}))

function getStyle(): CSSProperties {
  return {
    height: (Math.random() * 30) + 10,
    marginBottom: 10,
  }
}

export function useList() {
  const cur = useRef(1)
  const limit = 10

  const getStart = (page: number) => (page - 1) * limit
  const getEnd = (page: number) => page * limit
  const getList = (page: number) => arr.slice(getStart(page), getEnd(page))

  const [list, setL] = useState<any[]>(getList(cur.current))

  function getMore() {
    setTimeout(() => {
      setL(list => [...list, ...getList(cur.current + 1)])
      cur.current++
    }, 200)
  }

  return [list, getMore] as const
}