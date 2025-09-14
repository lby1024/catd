"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[1740],{28759:function(a,t,n){var o;n.r(t),n.d(t,{demos:function(){return g}});var v=n(90228),l=n.n(v),y=n(87999),u=n.n(y),s=n(75271),m=n(55697),f=n(5848),g={"src-overlay-demo-demo":{component:s.memo(s.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,53170))})),asset:{type:"BLOCK",id:"src-overlay-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(4738).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:m,react:o||(o=n.t(s,2)),"styled-components":f},renderOpts:{compile:function(){var i=u()(l()().mark(function p(){var r,c=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4028).then(n.bind(n,54028));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,c));case 3:case"end":return e.stop()}},p)}));function d(){return i.apply(this,arguments)}return d}()}},"src-overlay-demo-demo02":{component:s.memo(s.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,8705))})),asset:{type:"BLOCK",id:"src-overlay-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(967).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:m,react:o||(o=n.t(s,2)),"styled-components":f},renderOpts:{compile:function(){var i=u()(l()().mark(function p(){var r,c=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4028).then(n.bind(n,54028));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,c));case 3:case"end":return e.stop()}},p)}));function d(){return i.apply(this,arguments)}return d}()}}}},41473:function(a,t,n){n.r(t),n.d(t,{texts:function(){return o}});const o=[]},4738:function(a,t){t.Z=`import { Overlay, Button } from 'catd';
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
`},967:function(a,t){t.Z=`import { Button, Overlay } from 'catd';
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
