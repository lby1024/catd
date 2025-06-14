"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[4210],{21078:function(d,e,t){t.r(e),t.d(e,{demos:function(){return _}});var s=t(90228),r=t.n(s),f=t(87999),i=t.n(f),l=t(75271),c=t(44079),_={"src-tooltip-demo-demo":{component:l.memo(l.lazy(function(){return t.e(2433).then(t.bind(t,98933))})),asset:{type:"BLOCK",id:"src-tooltip-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(11258).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:c},renderOpts:{compile:function(){var a=i()(r()().mark(function m(){var o,p=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(1959).then(t.bind(t,1959));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,p));case 3:case"end":return n.stop()}},m)}));function u(){return a.apply(this,arguments)}return u}()}},"src-tooltip-demo-demo02":{component:l.memo(l.lazy(function(){return t.e(2433).then(t.bind(t,74604))})),asset:{type:"BLOCK",id:"src-tooltip-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(9361).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:c},renderOpts:{compile:function(){var a=i()(r()().mark(function m(){var o,p=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(1959).then(t.bind(t,1959));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,p));case 3:case"end":return n.stop()}},m)}));function u(){return a.apply(this,arguments)}return u}()}}}},90053:function(d,e,t){t.r(e),t.d(e,{texts:function(){return s}});const s=[]},11258:function(d,e){e.Z=`import { Tooltip } from 'catd';

const App = () => {
  return (
    <Tooltip text="prompt text">
      <div>Tooltip will show on mouse enter.</div>
    </Tooltip>
  );
};

export default App;
`},9361:function(d,e){e.Z=`import { Tooltip, Button } from 'catd';

const App = () => {
  return (
    <>
      <Tooltip text="prompt text">
        <Button>top</Button>
      </Tooltip>

      <Tooltip text="prompt text" placement="left">
        <Button>left</Button>
      </Tooltip>

      <Tooltip text="prompt text" placement="right">
        <Button>right</Button>
      </Tooltip>

      <Tooltip text="prompt text" placement="bottom">
        <Button>bottom</Button>
      </Tooltip>
    </>
  );
};

export default App;
`}}]);
