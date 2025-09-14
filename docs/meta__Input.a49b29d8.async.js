"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[1808],{90467:function(p,t,e){e.r(t),e.d(t,{demos:function(){return v}});var c=e(90228),r=e.n(c),f=e(87999),m=e.n(f),d=e(75271),i=e(55697),v={"src-input-demo-demo":{component:d.memo(d.lazy(function(){return Promise.all([e.e(5713),e.e(2433)]).then(e.bind(e,40801))})),asset:{type:"BLOCK",id:"src-input-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2663).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:i},renderOpts:{compile:function(){var l=m()(r()().mark(function s(){var a,u=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4028).then(e.bind(e,54028));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,u));case 3:case"end":return n.stop()}},s)}));function o(){return l.apply(this,arguments)}return o}()}},"src-input-demo-demo02":{component:d.memo(d.lazy(function(){return Promise.all([e.e(5713),e.e(2433)]).then(e.bind(e,90906))})),asset:{type:"BLOCK",id:"src-input-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(67641).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:i},renderOpts:{compile:function(){var l=m()(r()().mark(function s(){var a,u=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4028).then(e.bind(e,54028));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,u));case 3:case"end":return n.stop()}},s)}));function o(){return l.apply(this,arguments)}return o}()}},"src-input-demo-demo03":{component:d.memo(d.lazy(function(){return Promise.all([e.e(5713),e.e(2433)]).then(e.bind(e,71927))})),asset:{type:"BLOCK",id:"src-input-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39690).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:i},renderOpts:{compile:function(){var l=m()(r()().mark(function s(){var a,u=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4028).then(e.bind(e,54028));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,u));case 3:case"end":return n.stop()}},s)}));function o(){return l.apply(this,arguments)}return o}()}}}},30506:function(p,t,e){e.r(t),e.d(t,{texts:function(){return c}});const c=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"size",paraId:0,tocIndex:4},{value:"\u5927\u5C0F",paraId:0,tocIndex:4},{value:"'large' | 'small' | 'default'",paraId:0,tocIndex:4},{value:"default",paraId:0,tocIndex:4},{value:"addOnBefore",paraId:0,tocIndex:4},{value:"\u5C3A\u5BF8\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E",paraId:0,tocIndex:4},{value:"string | ReactElement",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"addOnAfter",paraId:0,tocIndex:4},{value:"\u5C3A\u5BF8\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E",paraId:0,tocIndex:4},{value:"string | ReactElement",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"prefix",paraId:0,tocIndex:4},{value:"\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input",paraId:0,tocIndex:4},{value:"string | ReactElement",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"suffix",paraId:0,tocIndex:4},{value:"\u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input",paraId:0,tocIndex:4},{value:"string | ReactElement",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4}]},2663:function(p,t){t.Z=`import { CSSProperties } from 'react';
import { Input } from 'catd';

const style: CSSProperties = { width: 150 };
const App = () => {
  return <Input placeholder="base use" style={style} />;
};

export default App;
`},67641:function(p,t){t.Z=`import { CSSProperties } from 'react';
import { Input, Icon } from 'catd';

const style: CSSProperties = { width: 300 };

const App = () => {
  return (
    <>
      <Input addOnBefore="http://" addOnAfter=".com" defaultValue="catd" style={style} />
      <br />
      <br />
      <Input
        addOnBefore="https://"
        addOnAfter={<Icon name="search" />}
        defaultValue="catd"
        maxLength={10}
        style={style}
      />
      <br />
      <br />
      <Input
        style={style}
        suffix={<Icon name="mic" />}
        addOnAfter={<Icon name="search" />}
        placeholder="placeholder..."
      />
      <br />
      <br />
      <Input prefix="http://" defaultValue="catd" suffix=".com" style={style} />
      <br />
      <br />
      <Input
        prefix={<Icon name="RectangleCopy1" size="21" />}
        placeholder="user name"
        suffix="x"
        style={style}
      />
    </>
  );
};

export default App;
`},39690:function(p,t){t.Z=`import { CSSProperties } from 'react';
import { Input, Icon } from 'catd';

const style: CSSProperties = { width: 300 };

const App = () => {
  return (
    <>
      <Input prefix={<Icon name="search" />} placeholder="search..." size="large" style={style} />
      <br />
      <br />
      <Input prefix={<Icon name="search" />} placeholder="search..." style={style} />
      <br />
      <br />
      <Input prefix={<Icon name="search" />} placeholder="search..." size="small" style={style} />
    </>
  );
};

export default App;
`}}]);
