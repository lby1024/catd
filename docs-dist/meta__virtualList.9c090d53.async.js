"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[783],{47296:function(u,e,t){t.r(e),t.d(e,{demos:function(){return v}});var c=t(17061),o=t.n(c),y=t(17156),p=t.n(y),a=t(62435),v={"src-virtual-list-demo-demo01":{component:a.memo(a.lazy(function(){return t.e(2433).then(t.bind(t,83296))})),asset:{type:"BLOCK",id:"src-virtual-list-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(49709).Z},catd:{type:"NPM",value:"1.0.5"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:t(31081),"styled-components":t(19521)},renderOpts:{compile:function(){var d=p()(o()().mark(function s(){var r,l=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,l));case 3:case"end":return n.stop()}},s)}));function i(){return d.apply(this,arguments)}return i}()}},"src-virtual-list-demo-demo02":{component:a.memo(a.lazy(function(){return t.e(2433).then(t.bind(t,52081))})),asset:{type:"BLOCK",id:"src-virtual-list-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(35224).Z},catd:{type:"NPM",value:"1.0.5"},"styled-components":{type:"NPM",value:"5.3.11"},"./demo.tsx":{type:"FILE",value:t(33113).Z},react:{type:"NPM",value:"18.1.0"}},entry:"index.tsx"},context:{catd:t(31081),"styled-components":t(19521),"./demo.tsx":t(36766),react:t(62435)},renderOpts:{compile:function(){var d=p()(o()().mark(function s(){var r,l=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,l));case 3:case"end":return n.stop()}},s)}));function i(){return d.apply(this,arguments)}return i}()}},"src-virtual-list-demo-demo03":{component:a.memo(a.lazy(function(){return t.e(2433).then(t.bind(t,40309))})),asset:{type:"BLOCK",id:"src-virtual-list-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(65825).Z},catd:{type:"NPM",value:"1.0.5"},"styled-components":{type:"NPM",value:"5.3.11"},"./demo.tsx":{type:"FILE",value:t(33113).Z},react:{type:"NPM",value:"18.1.0"}},entry:"index.tsx"},context:{catd:t(31081),"styled-components":t(19521),"./demo.tsx":t(36766),react:t(62435)},renderOpts:{compile:function(){var d=p()(o()().mark(function s(){var r,l=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,l));case 3:case"end":return n.stop()}},s)}));function i(){return d.apply(this,arguments)}return i}()}}}},36766:function(u,e,t){t.r(e),t.d(e,{useList:function(){return i}});var c=t(861),o=t.n(c),y=t(27424),p=t.n(y),a=t(62435),v=new Array(1e4).fill(0).map(function(s,r){return{id:r,style:d()}});function d(){return{height:Math.random()*30+10,marginBottom:10}}function i(){var s=(0,a.useRef)(1),r=10,l=function(m){return(m-1)*r},f=function(m){return m*r},n=function(m){return v.slice(l(m),f(m))},L=(0,a.useState)(n(s.current)),h=p()(L,2),E=h[0],M=h[1];function x(){setTimeout(function(){M(function(g){return[].concat(o()(g),o()(n(s.current+1)))}),s.current++},200)}return[E,x]}},46214:function(u,e,t){t.r(e),t.d(e,{texts:function(){return c}});const c=[{value:"\u4E0D\u5B9A\u9AD8\u865A\u62DF\u5217\u8868",paraId:0,tocIndex:2},{value:"\u6027\u80FD\u4F4E\u4E8E",paraId:0,tocIndex:2},{value:"\u5B9A\u9AD8\u865A\u62DF\u5217\u8868",paraId:0,tocIndex:2},{value:", \u4F18\u5148\u4F7F\u7528\u5B9A\u9AD8\u865A\u62DF\u5217\u8868",paraId:0,tocIndex:2}]},33113:function(u,e){e.Z=`import { CSSProperties, useRef, useState } from "react"

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
}`},49709:function(u,e){e.Z=`import { VirtualList } from "catd"
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

const Card = styled.div\`
  height: 30px;
  background: #f7f9fb;
  color: #999;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
\``},35224:function(u,e){e.Z=`import { VirtualList } from "catd"
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

const Card = styled.div\`
  height: 30px;
  background: #f7f9fb;
  color: #999;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
\``},65825:function(u,e){e.Z=`import { VirtualList } from "catd"
import styled from "styled-components"
import { useList } from "./demo.tool"

export default () => {

  const [list, getMore] = useList()

  return (
    <VirtualList.Pro
      data={list}
      limit={10}
      height={200}
      renderItem={item => <Card style={item.style} >{item.id}</Card>}
      getMore={getMore}
      renderLoading={() => <div>loading...</div>}
    />
  )
}

const Card = styled.div\`
  height: 30px;
  background: #f7f9fb;
  color: #999;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
\`
`}}]);
