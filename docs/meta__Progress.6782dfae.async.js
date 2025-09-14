"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[1540],{62606:function(l,t,e){e.r(t),e.d(t,{demos:function(){return g}});var a=e(90228),s=e.n(a),y=e(87999),p=e.n(y),o=e(75271),i=e(55697),g={"src-progress-demo-demo01":{component:o.memo(o.lazy(function(){return Promise.all([e.e(5713),e.e(2433)]).then(e.bind(e,31328))})),asset:{type:"BLOCK",id:"src-progress-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(87240).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:i},renderOpts:{compile:function(){var d=p()(s()().mark(function m(){var r,u=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4028).then(e.bind(e,54028));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,u));case 3:case"end":return n.stop()}},m)}));function c(){return d.apply(this,arguments)}return c}()}},"src-progress-demo-demo02":{component:o.memo(o.lazy(function(){return Promise.all([e.e(5713),e.e(2433)]).then(e.bind(e,21409))})),asset:{type:"BLOCK",id:"src-progress-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25920).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:i},renderOpts:{compile:function(){var d=p()(s()().mark(function m(){var r,u=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4028).then(e.bind(e,54028));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,u));case 3:case"end":return n.stop()}},m)}));function c(){return d.apply(this,arguments)}return c}()}}}},63441:function(l,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[]},87240:function(l,t){t.Z=`
import {Progress} from 'catd'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  marginTop: 9
}

export default () => {
  return <div style={{width: '50%'}} >
    <Progress percent={30} style={style} />
    <Progress percent={50} style={style} />
    <Progress percent={80} style={style} bgColor='rgb(255, 77, 79)' />
    <Progress percent={100} style={style} bgColor='rgb(82, 196, 26)' />
    <Progress percent={50} style={style} showText={false} height={5} />
  </div>
}`},25920:function(l,t){t.Z=`
import {Progress} from 'catd'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignItems: 'center',
  alignContent: 'space-around'
}

export default () => {
  return <div style={style} >
    <Progress type='circle' percent={30} />
    <Progress type='circle' percent={100} bgColor='rgb(82, 196, 26)' />
    <Progress type='circle' percent={50} bgColor='rgb(255, 77, 79)' />
    <Progress type='circle' percent={80} border={100} height={200} showText={false} bgColor="orange" />
  </div>
}`}}]);
