"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[7542],{52950:function(d,e,n){var a;n.r(e),n.d(e,{demos:function(){return S}});var h=n(90228),r=n.n(h),v=n(87999),u=n.n(v),s=n(75271),p=n(55697),y=n(5848),C=n(23021),S={"src-css-transiton-demo-demo01":{component:s.memo(s.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,98177))})),asset:{type:"BLOCK",id:"src-css-transiton-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(96096).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:p,react:a||(a=n.t(s,2)),"styled-components":y},renderOpts:{compile:function(){var i=u()(r()().mark(function m(){var o,c=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4028).then(n.bind(n,54028));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,c));case 3:case"end":return t.stop()}},m)}));function l(){return i.apply(this,arguments)}return l}()}},"src-css-transiton-demo-demo02":{component:s.memo(s.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,28669))})),asset:{type:"BLOCK",id:"src-css-transiton-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(40370).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:p,react:a||(a=n.t(s,2)),"styled-components":y},renderOpts:{compile:function(){var i=u()(r()().mark(function m(){var o,c=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4028).then(n.bind(n,54028));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,c));case 3:case"end":return t.stop()}},m)}));function l(){return i.apply(this,arguments)}return l}()}},"src-css-transiton-demo-demo03":{component:s.memo(s.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,67419))})),asset:{type:"BLOCK",id:"src-css-transiton-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(50724).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:p,react:a||(a=n.t(s,2)),"styled-components":y},renderOpts:{compile:function(){var i=u()(r()().mark(function m(){var o,c=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4028).then(n.bind(n,54028));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,c));case 3:case"end":return t.stop()}},m)}));function l(){return i.apply(this,arguments)}return l}()}},"src-css-transiton-demo-demo04":{component:s.memo(s.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,24624))})),asset:{type:"BLOCK",id:"src-css-transiton-demo-demo04",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(15022).Z},"animate.css":{type:"NPM",value:"4.1.1"},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"animate.css":C,catd:p,react:a||(a=n.t(s,2))},renderOpts:{compile:function(){var i=u()(r()().mark(function m(){var o,c=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4028).then(n.bind(n,54028));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,c));case 3:case"end":return t.stop()}},m)}));function l(){return i.apply(this,arguments)}return l}()}},"src-css-transiton-demo-demo05":{component:s.memo(s.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,9280))})),asset:{type:"BLOCK",id:"src-css-transiton-demo-demo05",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(1017).Z},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:p,react:a||(a=n.t(s,2)),"styled-components":y},renderOpts:{compile:function(){var i=u()(r()().mark(function m(){var o,c=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4028).then(n.bind(n,54028));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,c));case 3:case"end":return t.stop()}},m)}));function l(){return i.apply(this,arguments)}return l}()}}}},23021:function(d,e,n){n.r(e)},41698:function(d,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},96096:function(d,e){e.Z=`import { Button, Transition } from 'catd';
import { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [show, setShow] = useState(true);

  return (
    <Content>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        Toggle
      </Button>

      <Transition.CSS show={show} duration={1000}>
        <span>hellow world</span>
      </Transition.CSS>
    </Content>
  );
};

const Content = styled.div\`
  span {
    font-size: 24px;
    display: inline-block;
  }
  .enter {
    opacity: 0;
    transform: translateX(-10%);
  }

  .enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1s;
  }

  .exit {
    opacity: 1;
    transform: translateX(0);
  }

  .exit-active {
    opacity: 0;
    transform: translateX(10%);
    transition: all 1s;
  }
\`;
`},40370:function(d,e){e.Z=`import { Button, Icon, Transition } from 'catd';
import React, { useState } from 'react';
import styled from 'styled-components';

const Hellow = React.forwardRef<any>((props, ref) => {
  return (
    <i ref={ref}>
      <Icon name="camera" size="24" />
      <i>hellow world</i>
    </i>
  );
});

export default () => {
  const [show, setShow] = useState(true);

  return (
    <Content>
      <Button onClick={() => setShow(!show)} btnType="primary">
        Toggle
      </Button>

      <Transition.CSS show={show} duration={1000} appear>
        <Hellow />
      </Transition.CSS>
    </Content>
  );
};

const Content = styled.div\`
  i {
    font-size: 24px;
    display: inline-block;
    padding: 0px 12px;
  }

  .appear,
  .enter {
    opacity: 0;
    transform: translateX(-10%);
  }
  .appear-active,
  .enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1s;
  }

  .exit {
    opacity: 1;
    transform: translateX(0);
  }
  .exit-active {
    opacity: 0;
    transform: translateX(10%);
    transition: all 1s;
  }
\`;
`},50724:function(d,e){e.Z=`import { Button, Icon, Transition } from 'catd';
import { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [show, setShow] = useState(true);

  return (
    <Content>
      <Button onClick={() => setShow(!show)} btnType="primary">
        Toggle
      </Button>

      <Transition.CSS show={show} duration={1000} className={'left'}>
        <Icon name="fabulous" size="28" />
      </Transition.CSS>

      <Transition.CSS show={show} duration={1000} className={'right'}>
        <Icon name="operation" size="28" />
      </Transition.CSS>
    </Content>
  );
};

const Content = styled.div\`
  .left-enter {
    opacity: 0;
    transform: translateX(-50%);
  }

  .left-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1s;
  }

  .left-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .left-exit-active {
    opacity: 0;
    transform: translateX(-50%);
    transition: all 1s;
  }

  .right-enter {
    opacity: 0;
    transform: translateX(50%);
  }

  .right-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1s;
  }

  .right-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .right-exit-active {
    opacity: 0;
    transform: translateX(50%);
    transition: all 1s;
  }
\`;
`},15022:function(d,e){e.Z=`import 'animate.css';
import { Button, Icon, Transition } from 'catd';
import { ClassNames } from 'catd/Transition/types';
import { useState } from 'react';

export default () => {
  const [show, setShow] = useState(true);

  const names: ClassNames = {
    'enter-active': 'animate__bounce',
    'exit-active': 'animate__bounceOutDown',
  };

  return (
    <>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        Toggle
      </Button>

      <Transition.CSS show={show} duration={1000} className={names}>
        <Icon className="animate__animated" name="fabulous" size="28" />
      </Transition.CSS>
    </>
  );
};
`},1017:function(d,e){e.Z=`import { Button, Icon, Transition } from 'catd';
import { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [show, setShow] = useState(true);

  return (
    <Content>
      <Button onClick={() => setShow(!show)} btnType="primary">
        Toggle
      </Button>

      <Transition.CSS show={show} duration={1000}>
        <Icon className="icon" name="fabulous" size="28" />
      </Transition.CSS>

      <Transition.CSS show={!show} duration={1000}>
        <Icon className="icon" name="operation" size="28" />
      </Transition.CSS>
    </Content>
  );
};

const Content = styled.div\`
  position: relative;
  .icon {
    position: absolute;
  }
  .enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1s;
  }

  .exit {
    opacity: 1;
    transform: translateX(0);
  }

  .exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 1s;
  }
\`;
`}}]);
