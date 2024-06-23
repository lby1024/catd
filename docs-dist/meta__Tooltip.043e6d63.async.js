"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[4210],{76475:function(l,e,t){t.r(e),t.d(e,{demos:function(){return f}});var d=t(17061),r=t.n(d),c=t(17156),i=t.n(c),s=t(62435),f={"src-tooltip-demo-demo":{component:s.memo(s.lazy(function(){return t.e(2433).then(t.bind(t,40112))})),asset:{type:"BLOCK",id:"src-tooltip-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(4999).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:t(31081)},renderOpts:{compile:function(){var a=i()(r()().mark(function p(){var o,m=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,m));case 3:case"end":return n.stop()}},p)}));function u(){return a.apply(this,arguments)}return u}()}},"src-tooltip-demo-demo02":{component:s.memo(s.lazy(function(){return t.e(2433).then(t.bind(t,73202))})),asset:{type:"BLOCK",id:"src-tooltip-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(92189).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:t(31081)},renderOpts:{compile:function(){var a=i()(r()().mark(function p(){var o,m=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,m));case 3:case"end":return n.stop()}},p)}));function u(){return a.apply(this,arguments)}return u}()}}}},33083:function(l,e,t){t.r(e),t.d(e,{texts:function(){return d}});const d=[]},4999:function(l,e){e.Z=`import { Tooltip } from 'catd';

const App = () => {
  return (
    <Tooltip text="prompt text">
      <div>Tooltip will show on mouse enter.</div>
    </Tooltip>
  );
};

export default App;
`},92189:function(l,e){e.Z=`import { Tooltip, Button } from 'catd';

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
