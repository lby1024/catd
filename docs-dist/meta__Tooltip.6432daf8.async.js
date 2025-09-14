"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[4210],{36092:function(s,e,t){t.r(e),t.d(e,{demos:function(){return v}});var d=t(90228),l=t.n(d),f=t(87999),i=t.n(f),r=t(75271),c=t(55697),v={"src-tooltip-demo-demo":{component:r.memo(r.lazy(function(){return Promise.all([t.e(5713),t.e(2433)]).then(t.bind(t,3561))})),asset:{type:"BLOCK",id:"src-tooltip-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(62409).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:c},renderOpts:{compile:function(){var a=i()(l()().mark(function u(){var o,p=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(4028).then(t.bind(t,54028));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,p));case 3:case"end":return n.stop()}},u)}));function m(){return a.apply(this,arguments)}return m}()}},"src-tooltip-demo-demo02":{component:r.memo(r.lazy(function(){return Promise.all([t.e(5713),t.e(2433)]).then(t.bind(t,72659))})),asset:{type:"BLOCK",id:"src-tooltip-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(60805).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:c},renderOpts:{compile:function(){var a=i()(l()().mark(function u(){var o,p=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(4028).then(t.bind(t,54028));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,p));case 3:case"end":return n.stop()}},u)}));function m(){return a.apply(this,arguments)}return m}()}}}},10188:function(s,e,t){t.r(e),t.d(e,{texts:function(){return d}});const d=[]},62409:function(s,e){e.Z=`import { Tooltip } from 'catd';

const App = () => {
  return (
    <Tooltip text="prompt text">
      <div>Tooltip will show on mouse enter.</div>
    </Tooltip>
  );
};

export default App;
`},60805:function(s,e){e.Z=`import { Tooltip, Button } from 'catd';

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
