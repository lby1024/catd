"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[5234],{75579:function(r,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(90228),m=n.n(f),v=n(87999),u=n.n(v),s=n(75271),p=n(23021),_=n(55697),h=n(5848),y={"src-switch-transition-demo-demo01":{component:s.memo(s.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,67589))})),asset:{type:"BLOCK",id:"src-switch-transition-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(8629).Z},"animate.css":{type:"NPM",value:"4.1.1"},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{"animate.css":p,catd:_,react:a||(a=n.t(s,2)),"styled-components":h},renderOpts:{compile:function(){var i=u()(m()().mark(function c(){var o,l=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4028).then(n.bind(n,54028));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,l));case 3:case"end":return t.stop()}},c)}));function d(){return i.apply(this,arguments)}return d}()}},"src-switch-transition-demo-demo02":{component:s.memo(s.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,4074))})),asset:{type:"BLOCK",id:"src-switch-transition-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(44611).Z},"animate.css":{type:"NPM",value:"4.1.1"},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"animate.css":p,catd:_,react:a||(a=n.t(s,2))},renderOpts:{compile:function(){var i=u()(m()().mark(function c(){var o,l=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4028).then(n.bind(n,54028));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,l));case 3:case"end":return t.stop()}},c)}));function d(){return i.apply(this,arguments)}return d}()}}}},23021:function(r,e,n){n.r(e)},89470:function(r,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u914D\u5408 ",paraId:0,tocIndex:1},{value:"animate.css",paraId:0,tocIndex:1},{value:" \u5B9E\u73B0",paraId:0,tocIndex:1},{value:"\u6DFB\u52A0 ",paraId:1,tocIndex:2},{value:"inTurn",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u540E\u52A8\u753B\u5C06\u6309\u987A\u5E8F\u6267\u884C",paraId:1,tocIndex:2}]},8629:function(r,e){e.Z=`import 'animate.css';
import { Button, Icon, Transition } from 'catd';
import { ClassNames } from 'catd/Transition/types';
import { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [show, setShow] = useState(true);

  const names: ClassNames = {
    'appear-active': 'animate__heartBeat',
    'enter-active': 'animate__fadeInDown',
    'exit-active': 'animate__fadeOutDown',
  };

  return (
    <Content>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        Toggle
      </Button>

      <Transition.Switch show={show} duration={1000} className={names} appear>
        <Icon className="animate__animated" name="file-open" size="28" />
        <Icon className="animate__animated" name="fabulous" size="28" />
      </Transition.Switch>
    </Content>
  );
};

const Content = styled.div\`
  display: flex;
\`;
`},44611:function(r,e){e.Z=`import 'animate.css';
import { Button, Icon, Transition } from 'catd';
import { ClassNames } from 'catd/Transition/types';
import { useState } from 'react';

export default () => {
  const [show, setShow] = useState(true);

  const names: ClassNames = {
    'enter-active': 'animate__fadeInDown',
    'exit-active': 'animate__fadeOutDown',
    'appear-active': 'animate__backInRight',
  };

  return (
    <>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        Toggle
      </Button>

      <Transition.Switch
        show={show}
        duration={400}
        className={names}
        inTurn
        appear
      >
        <Icon
          className="animate__animated animate__fast"
          name="file-open"
          size="28"
        />
        <Icon
          className="animate__animated animate__fast"
          name="fabulous"
          size="28"
        />
      </Transition.Switch>
    </>
  );
};
`}}]);
