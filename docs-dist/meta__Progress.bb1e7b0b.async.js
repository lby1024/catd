"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[1540],{60083:function(a,t,e){e.r(t),e.d(t,{demos:function(){return y}});var l=e(17061),s=e.n(l),i=e(17156),p=e.n(i),o=e(62435),y={"src-progress-demo-demo01":{component:o.memo(o.lazy(function(){return e.e(2433).then(e.bind(e,95158))})),asset:{type:"BLOCK",id:"src-progress-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10719).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:e(31081)},renderOpts:{compile:function(){var d=p()(s()().mark(function u(){var r,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,m));case 3:case"end":return n.stop()}},u)}));function c(){return d.apply(this,arguments)}return c}()}},"src-progress-demo-demo02":{component:o.memo(o.lazy(function(){return e.e(2433).then(e.bind(e,15923))})),asset:{type:"BLOCK",id:"src-progress-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(85993).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:e(31081)},renderOpts:{compile:function(){var d=p()(s()().mark(function u(){var r,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,m));case 3:case"end":return n.stop()}},u)}));function c(){return d.apply(this,arguments)}return c}()}}}},84090:function(a,t,e){e.r(t),e.d(t,{texts:function(){return l}});const l=[]},10719:function(a,t){t.Z=`
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
}`},85993:function(a,t){t.Z=`
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
