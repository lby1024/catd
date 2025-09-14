"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[9148],{31154:function(r,t,e){e.r(t),e.d(t,{demos:function(){return y}});var o=e(90228),d=e.n(o),p=e(87999),i=e.n(p),s=e(75271),f=e(55697),y={"src-calendar-demo-demo01":{component:s.memo(s.lazy(function(){return Promise.all([e.e(5713),e.e(2433)]).then(e.bind(e,55486))})),asset:{type:"BLOCK",id:"src-calendar-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57451).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:f},renderOpts:{compile:function(){var l=i()(d()().mark(function m(){var a,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4028).then(e.bind(e,54028));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,c));case 3:case"end":return n.stop()}},m)}));function u(){return l.apply(this,arguments)}return u}()}},"src-calendar-demo-demo02":{component:s.memo(s.lazy(function(){return Promise.all([e.e(5713),e.e(2433)]).then(e.bind(e,44181))})),asset:{type:"BLOCK",id:"src-calendar-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93859).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:f},renderOpts:{compile:function(){var l=i()(d()().mark(function m(){var a,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4028).then(e.bind(e,54028));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,c));case 3:case"end":return n.stop()}},m)}));function u(){return l.apply(this,arguments)}return u}()}}}},45849:function(r,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:"\u6BCF\u67083\u53F7\u7981\u9009",paraId:0,tocIndex:1}]},57451:function(r,t){t.Z=`import {Calendar, Message} from "catd"

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
} `},93859:function(r,t){t.Z=`import { Calendar, Message } from 'catd';

export default () => {
  function alert(d: Date) {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    Message.success(\`\${year}\u5E74\${month}\u6708\${date}\u65E5\`);
  }

  function disableDate(date: Date) {
    if (date.getDate() === 3) {
      return true;
    }
    return false;
  }

  return (
    <Calendar
      defaultValue={new Date('2222/2/2')}
      disableDate={disableDate}
      onChange={(d) => alert(d)}
    />
  );
};
`}}]);
