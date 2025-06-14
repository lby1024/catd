"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[783],{48075:function(c,e,t){var a;t.r(e),t.d(e,{demos:function(){return p}});var y=t(90228),d=t.n(y),h=t(87999),_=t.n(h),r=t(75271),v=t(44079),f=t(57495),s=t(35219),p={"src-virtual-list-demo-demo01":{component:r.memo(r.lazy(function(){return t.e(2433).then(t.bind(t,83548))})),asset:{type:"BLOCK",id:"src-virtual-list-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(34007).Z},catd:{type:"NPM",value:"1.0.5"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:v,"styled-components":f},renderOpts:{compile:function(){var u=_()(d()().mark(function l(){var o,i=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(1959).then(t.bind(t,1959));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,i));case 3:case"end":return n.stop()}},l)}));function m(){return u.apply(this,arguments)}return m}()}},"src-virtual-list-demo-demo02":{component:r.memo(r.lazy(function(){return t.e(2433).then(t.bind(t,11576))})),asset:{type:"BLOCK",id:"src-virtual-list-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(83983).Z},catd:{type:"NPM",value:"1.0.5"},"styled-components":{type:"NPM",value:"5.3.11"},"./demo.tsx":{type:"FILE",value:t(62803).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"./demo.tsx":s,catd:v,"styled-components":f,"/Users/boyang/code/react/react\u7EC4\u4EF6\u5E93/catd-v3/src/virtualList/demo.tool.tsx":s,react:a||(a=t.t(r,2))},renderOpts:{compile:function(){var u=_()(d()().mark(function l(){var o,i=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(1959).then(t.bind(t,1959));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,i));case 3:case"end":return n.stop()}},l)}));function m(){return u.apply(this,arguments)}return m}()}},"src-virtual-list-demo-demo03":{component:r.memo(r.lazy(function(){return t.e(2433).then(t.bind(t,88135))})),asset:{type:"BLOCK",id:"src-virtual-list-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(54837).Z},catd:{type:"NPM",value:"1.0.5"},"styled-components":{type:"NPM",value:"5.3.11"},"./demo.tsx":{type:"FILE",value:t(62803).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"./demo.tsx":s,catd:v,"styled-components":f,"/Users/boyang/code/react/react\u7EC4\u4EF6\u5E93/catd-v3/src/virtualList/demo.tool.tsx":s,react:a||(a=t.t(r,2))},renderOpts:{compile:function(){var u=_()(d()().mark(function l(){var o,i=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(1959).then(t.bind(t,1959));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,i));case 3:case"end":return n.stop()}},l)}));function m(){return u.apply(this,arguments)}return m}()}}}},35219:function(c,e,t){t.r(e),t.d(e,{useList:function(){return f}});var a=t(15558),y=t.n(a),d=t(48305),h=t.n(d),_=t(75271),r=new Array(1e4).fill(0).map(function(s,p){return{id:p,style:v()}});function v(){return{height:Math.random()*30+10,marginBottom:10}}function f(){var s=(0,_.useRef)(1),p=10,u=function(g){return(g-1)*p},m=function(g){return g*p},l=function(g){return r.slice(u(g),m(g))},o=(0,_.useState)(l(s.current)),i=h()(o,2),E=i[0],n=i[1];function M(){setTimeout(function(){n(function(L){return[].concat(y()(L),y()(l(s.current+1)))}),s.current++},200)}return[E,M]}},90753:function(c,e,t){t.r(e),t.d(e,{texts:function(){return a}});const a=[{value:"\u4E0D\u5B9A\u9AD8\u865A\u62DF\u5217\u8868",paraId:0,tocIndex:2},{value:"\u6027\u80FD\u4F4E\u4E8E",paraId:0,tocIndex:2},{value:"\u5B9A\u9AD8\u865A\u62DF\u5217\u8868",paraId:0,tocIndex:2},{value:", \u4F18\u5148\u4F7F\u7528\u5B9A\u9AD8\u865A\u62DF\u5217\u8868",paraId:0,tocIndex:2}]},62803:function(c,e){e.Z=`import { CSSProperties, useRef, useState } from "react"

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
}`},34007:function(c,e){e.Z=`import { VirtualList } from "catd"
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
\``},83983:function(c,e){e.Z=`import { VirtualList } from "catd"
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
\``},54837:function(c,e){e.Z=`import { VirtualList } from "catd"
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
