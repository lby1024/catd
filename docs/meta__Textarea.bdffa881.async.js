"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[2295],{73867:function(s,a,e){e.r(a),e.d(a,{demos:function(){return i}});var p=e(90228),d=e.n(p),x=e(87999),I=e.n(x),r=e(75271),m=e(44079),i={"src-textarea-demo-demo":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,42668))})),asset:{type:"BLOCK",id:"src-textarea-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21356).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:m},renderOpts:{compile:function(){var o=I()(d()().mark(function l(){var t,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1959).then(e.bind(e,1959));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,c));case 3:case"end":return n.stop()}},l)}));function u(){return o.apply(this,arguments)}return u}()}},"src-textarea-demo-demo02":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,375))})),asset:{type:"BLOCK",id:"src-textarea-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(69398).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:m},renderOpts:{compile:function(){var o=I()(d()().mark(function l(){var t,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1959).then(e.bind(e,1959));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,c));case 3:case"end":return n.stop()}},l)}));function u(){return o.apply(this,arguments)}return u}()}},"src-textarea-demo-demo03":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,34886))})),asset:{type:"BLOCK",id:"src-textarea-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(5054).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:m},renderOpts:{compile:function(){var o=I()(d()().mark(function l(){var t,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1959).then(e.bind(e,1959));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,c));case 3:case"end":return n.stop()}},l)}));function u(){return o.apply(this,arguments)}return u}()}}}},62064:function(s,a,e){e.r(a),e.d(a,{texts:function(){return p}});const p=[{value:"\u6700\u5C0F3\u884C, \u6700\u59277\u884C",paraId:0,tocIndex:3},{value:`

  
  
  
  `,paraId:1},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"autoSize",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u4E3A true | false \u6216\u5BF9\u8C61\uFF1A{ minRows: 2, maxRows: 6 }",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"boolean | object",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"showCount",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u662F\u5426\u5C55\u793A\u5B57\u6570",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u8F93\u5165\u6846\u5185\u5BB9",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"defaultValue",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4}]},21356:function(s,a){a.Z=`/**
 */
import { Input } from 'catd';

const TextArea = Input.TextArea;

const App = () => {
  return <TextArea placeholder="\u663E\u793A\u5B57\u6570" maxLength={30} showCount />;
};

export default App;
`},69398:function(s,a){a.Z=`import { Input } from 'catd';

const TextArea = Input.TextArea;

const App = () => {
  return <TextArea placeholder="\u81EA\u52A8\u6491\u9AD8" autoSize={true} />;
};

export default App;
`},5054:function(s,a){a.Z=`import { Input } from 'catd';

const TextArea = Input.TextArea;

const App = () => {
  return (
    <TextArea
      placeholder="\u6700\u5C0F3\u884C, \u6700\u59277\u884C"
      showCount={true}
      maxLength={30}
      autoSize={{ minRow: 3, maxRow: 7 }}
    />
  );
};

export default App;
`}}]);
