"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[1740],{97947:function(l,t,n){n.r(t),n.d(t,{demos:function(){return f}});var i=n(17061),o=n.n(i),m=n(17156),u=n.n(m),r=n(62435),f={"src-overlay-demo-demo":{component:r.memo(r.lazy(function(){return n.e(2433).then(n.bind(n,37744))})),asset:{type:"BLOCK",id:"src-overlay-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(48643).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.1.0"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:n(31081),react:n(62435),"styled-components":n(19521)},renderOpts:{compile:function(){var a=u()(o()().mark(function c(){var s,p=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,p));case 3:case"end":return e.stop()}},c)}));function d(){return a.apply(this,arguments)}return d}()}},"src-overlay-demo-demo02":{component:r.memo(r.lazy(function(){return n.e(2433).then(n.bind(n,10591))})),asset:{type:"BLOCK",id:"src-overlay-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(32481).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.1.0"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:n(31081),react:n(62435),"styled-components":n(19521)},renderOpts:{compile:function(){var a=u()(o()().mark(function c(){var s,p=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,p));case 3:case"end":return e.stop()}},c)}));function d(){return a.apply(this,arguments)}return d}()}}}},97441:function(l,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[]},48643:function(l,t){t.Z=`import { Overlay, Button } from 'catd';
import { useRef, useState } from 'react';
import styled from 'styled-components';

const Card = styled.div\`
  width: 300px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  color: #999;
\`;
const Trigger = styled.div\`
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
\`;

const App = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  function trigger(visible: boolean) {
    setVisible(visible);
  }

  return (
    <>
      <Trigger ref={btnRef} onClick={() => trigger(!visible)}>
        <Button btnType='primary' >click here</Button>
      </Trigger>

      <Overlay visible={visible} onVisibleChange={(visible) => trigger(visible)} btnRef={btnRef}>
        <Card>\u70B9\u51FB\u7A7A\u767D\u5904\u6D88\u5931</Card>
      </Overlay>
    </>
  );
};

export default App;
`},32481:function(l,t){t.Z=`import { Button, Overlay } from 'catd';
import { useRef, useState } from 'react';
import styled from 'styled-components';

const Card = styled.div\`
  width: 300px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  color: #999;
\`;
const Trigger = styled.div\`
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
\`;

const App = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  function trigger(visible: boolean) {
    setVisible(visible);
  }

  return (
    <>
      <Trigger ref={btnRef} onClick={() => trigger(!visible)}>
        <Button btnType='primary' >trigger top</Button>
      </Trigger>

      <Overlay
        visible={visible}
        onVisibleChange={(visible) => trigger(visible)}
        btnRef={btnRef}
        placement="top"
      >
        <Card>\u70B9\u51FB\u7A7A\u767D\u5904\u6D88\u5931</Card>
      </Overlay>
    </>
  );
};

export default App;
`}}]);
