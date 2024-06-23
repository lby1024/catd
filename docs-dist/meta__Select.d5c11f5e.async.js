"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[7601],{81569:function(a,n,e){e.r(n),e.d(n,{demos:function(){return u}});var o=e(17061),s=e.n(o),d=e(17156),c=e.n(d),l=e(62435),u={"src-select-demo-demo01":{component:l.memo(l.lazy(function(){return e.e(2433).then(e.bind(e,94134))})),asset:{type:"BLOCK",id:"src-select-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13256).Z},react:{type:"NPM",value:"18.1.0"},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:e(62435),catd:e(31081)},renderOpts:{compile:function(){var m=c()(s()().mark(function y(){var r,p=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,p));case 3:case"end":return t.stop()}},y)}));function i(){return m.apply(this,arguments)}return i}()}}}},7105:function(a,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[]},13256:function(a,n){n.Z=`import { DropItem } from "catd/interface"
import React, { CSSProperties } from "react"
import { Select } from "catd"

const options: DropItem[] = [
  {
    key: 'jack',
    label: 'Jack',
    value: 'jack'
  },
  {
    key: 'lucy',
    label: 'Lucy',
    value: 'lucy'
  },
  {
    key: 'tom',
    label: 'Tom',
    value: 'tom'
  },
  {
    key: 'tony',
    label: 'Tony',
    value: 'tony'
  },
]
export default () => {

  const style: CSSProperties = {
    marginRight: 12,
    marginBottom: 12
  }

  return <div>
    <Select options={options} style={style} />
    <Select options={options} style={style} defaultValue='tom' />
    <Select options={options} style={style} defaultValue='tom' disabled />
  </div>
}`}}]);
