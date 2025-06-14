"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[1141],{45822:function(a,t,n){var o;n.r(t),n.d(t,{demos:function(){return v}});var y=n(90228),s=n.n(y),x=n(87999),i=n.n(x),p=n(75271),m=n(44079),f=n(57495),v={"src-popup-demo-demo":{component:p.memo(p.lazy(function(){return n.e(2433).then(n.bind(n,13114))})),asset:{type:"BLOCK",id:"src-popup-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(99617).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:m,react:o||(o=n.t(p,2)),"styled-components":f},renderOpts:{compile:function(){var d=i()(s()().mark(function l(){var r,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(1959).then(n.bind(n,1959));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,c));case 3:case"end":return e.stop()}},l)}));function u(){return d.apply(this,arguments)}return u}()}},"src-popup-demo-demo02":{component:p.memo(p.lazy(function(){return n.e(2433).then(n.bind(n,66507))})),asset:{type:"BLOCK",id:"src-popup-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(24631).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:m,react:o||(o=n.t(p,2)),"styled-components":f},renderOpts:{compile:function(){var d=i()(s()().mark(function l(){var r,c=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(1959).then(n.bind(n,1959));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,c));case 3:case"end":return e.stop()}},l)}));function u(){return d.apply(this,arguments)}return u}()}}}},6886:function(a,t,n){n.r(t),n.d(t,{texts:function(){return o}});const o=[]},99617:function(a,t){t.Z=`import { Popup, Button, PopupExp, Icon } from 'catd';
import { useRef } from 'react';
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
  position: relative;
  .icon {
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
  }
\`;

const App = () => {
  const popupRef = useRef<PopupExp>(null)

  const close = () => popupRef.current?.setVisible(false)

  const overLay = <Card>
    <span>\u79BB\u5F00\u6D88\u5931</span>
    <Icon  className='icon' size='33' color='#ff4d4f' onClick={close} hoverColor='red' name='icon-mianxing_fuzhi_guanbi' />
  </Card>

  return (
    <Popup overLay={overLay} ref={popupRef}>
      <Button btnType='primary' >hover</Button>
    </Popup>
  );
};

export default App;
`},24631:function(a,t){t.Z=`import { Popup, Button, Icon, PopupExp } from 'catd';
import { useRef } from 'react';
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
  position: relative;
  .icon {
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
  }
\`;

const App = () => {
  const popupRef = useRef<PopupExp>(null)

  const close = () => popupRef.current?.setVisible(false)

  const overLay = <Card>
    <span>\u70B9\u51FB\u7A7A\u767D\u5904\u6D88\u5931</span>
    <Icon  className='icon' size='33' color='#ff4d4f' onClick={close} hoverColor='red' name='icon-mianxing_fuzhi_guanbi' />
  </Card>

  return (
    <Popup overLay={overLay} trigger="click" placement="top" ref={popupRef}>
      <Button btnType='primary' >click</Button>
    </Popup>
  );
};

export default App;
`}}]);
