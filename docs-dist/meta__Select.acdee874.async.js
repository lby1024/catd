"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[7601],{69269:function(s,n,e){var o;e.r(n),e.d(n,{demos:function(){return u}});var d=e(90228),l=e.n(d),m=e(87999),_=e.n(m),a=e(75271),c=e(55697),u={"src-select-demo-demo01":{component:a.memo(a.lazy(function(){return Promise.all([e.e(5713),e.e(2433)]).then(e.bind(e,54137))})),asset:{type:"BLOCK",id:"src-select-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43535).Z},react:{type:"NPM",value:"18.3.1"},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:o||(o=e.t(a,2)),catd:c},renderOpts:{compile:function(){var i=_()(l()().mark(function y(){var r,v=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4028).then(e.bind(e,54028));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,v));case 3:case"end":return t.stop()}},y)}));function p(){return i.apply(this,arguments)}return p}()}}}},39004:function(s,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[]},43535:function(s,n){n.Z=`import { DropItem } from "catd/interface"
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
