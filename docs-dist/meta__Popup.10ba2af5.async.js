"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[1141],{78001:function(r,t,n){n.r(t),n.d(t,{demos:function(){return f}});var a=n(17061),p=n.n(a),m=n(17156),i=n.n(m),s=n(62435),f={"src-popup-demo-demo":{component:s.memo(s.lazy(function(){return n.e(2433).then(n.bind(n,41984))})),asset:{type:"BLOCK",id:"src-popup-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(26619).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.1.0"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:n(31081),react:n(62435),"styled-components":n(19521)},renderOpts:{compile:function(){var d=i()(p()().mark(function l(){var o,u=arguments;return p()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},l)}));function c(){return d.apply(this,arguments)}return c}()}},"src-popup-demo-demo02":{component:s.memo(s.lazy(function(){return n.e(2433).then(n.bind(n,17663))})),asset:{type:"BLOCK",id:"src-popup-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(50594).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.1.0"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:n(31081),react:n(62435),"styled-components":n(19521)},renderOpts:{compile:function(){var d=i()(p()().mark(function l(){var o,u=arguments;return p()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},l)}));function c(){return d.apply(this,arguments)}return c}()}}}},15815:function(r,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[]},26619:function(r,t){t.Z=`import { Popup, Button, PopupExp, Icon } from 'catd';
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
`},50594:function(r,t){t.Z=`import { Popup, Button, Icon, PopupExp } from 'catd';
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
