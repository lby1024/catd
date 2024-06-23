"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[9148],{65485:function(r,t,n){n.r(t),n.d(t,{demos:function(){return g}});var o=n(17061),d=n.n(o),f=n(17156),i=n.n(f),s=n(62435),g={"src-calendar-demo-demo01":{component:s.memo(s.lazy(function(){return n.e(2433).then(n.bind(n,45298))})),asset:{type:"BLOCK",id:"src-calendar-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(38605).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:n(31081)},renderOpts:{compile:function(){var l=i()(d()().mark(function c(){var a,m=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,m));case 3:case"end":return e.stop()}},c)}));function u(){return l.apply(this,arguments)}return u}()}},"src-calendar-demo-demo02":{component:s.memo(s.lazy(function(){return n.e(2433).then(n.bind(n,33037))})),asset:{type:"BLOCK",id:"src-calendar-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(3365).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:n(31081)},renderOpts:{compile:function(){var l=i()(d()().mark(function c(){var a,m=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,m));case 3:case"end":return e.stop()}},c)}));function u(){return l.apply(this,arguments)}return u}()}}}},84205:function(r,t,n){n.r(t),n.d(t,{texts:function(){return o}});const o=[{value:"\u6BCF\u67083\u53F7\u7981\u9009",paraId:0,tocIndex:1}]},38605:function(r,t){t.Z=`import {Calendar, Message} from "catd"

export default () => {

  function alert(d: Date) {
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate()
    Message.success(\`\${year}\u5E74\${month}\u6708\${date}\u65E5\`)
  }

  return (
    <Calendar onChange={d => alert(d)} />
  )
} `},3365:function(r,t){t.Z=`import {Calendar, Message} from "catd"

export default () => {

  function alert(d: Date) {
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate()
    Message.success(\`\${year}\u5E74\${month}\u6708\${date}\u65E5\`)
  }

  function disableDate(date: Date) {
    if (date.getDate() === 3) {
      console.log(date.getDate())
      return true
    }
    return false
  }

  return (
    <Calendar
      defaultValue={new Date('2222/2/2')}
      disableDate={disableDate}
      onChange={d => alert(d)} />
  )
}`}}]);
