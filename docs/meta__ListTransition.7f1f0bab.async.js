"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[2413],{64017:function(s,e,n){var a;n.r(e),n.d(e,{demos:function(){return p}});var r=n(90228),i=n.n(r),l=n(87999),m=n.n(l),o=n(75271),c=n(23021),_=n(55697),u=n(5848),p={"src-list-transition-demo-demo01":{component:o.memo(o.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,59521))})),asset:{type:"BLOCK",id:"src-list-transition-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(96487).Z},"animate.css":{type:"NPM",value:"4.1.1"},catd:{type:"NPM",value:"1.0.5"},react:{type:"NPM",value:"18.3.1"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{"animate.css":c,catd:_,react:a||(a=n.t(o,2)),"styled-components":u},renderOpts:{compile:function(){var f=m()(i()().mark(function y(){var d,E=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4028).then(n.bind(n,54028));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,E));case 3:case"end":return t.stop()}},y)}));function v(){return f.apply(this,arguments)}return v}()}}}},23021:function(s,e,n){n.r(e)},45678:function(s,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},96487:function(s,e){e.Z=`import 'animate.css';
import { Icon, Input, Transition } from 'catd';
import { ClassNames } from 'catd/Transition/types';
import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [v, setV] = useState('');
  const [data, setData] = useState([
    { id: 0, title: 'jack' },
    { id: 1, title: 'tom' },
    { id: 2, title: 'lily' },
    { id: 3, title: 'lucy' },
  ]);

  const names: ClassNames = {
    'enter-active': 'animate__slideInDown',
    'exit-active': 'animate__fadeOutDown',
    'appear-active': 'animate__slideInUp',
  };

  function add() {
    if (!v) return;

    const newOne = {
      id: new Date().getTime(),
      title: v,
    };

    setData([newOne, ...data]);
    setV('');
  }

  function dele(id: number) {
    const res = data.filter((item) => item.id !== id);
    setData(res);
  }

  return (
    <>
      <Input
        placeholder="\u6DFB\u52A0..."
        value={v}
        onChange={(e) => setV(e.target.value)}
        addOnAfter="add"
        onAfterClick={add}
      />

      <Transition.List data={data} duration={800} className={names} appear>
        {(item: any) => (
          <Line
            className="animate__animated animate__fast"
            key={item.id}
            title={item.title}
            onClick={() => dele(item.id)}
          />
        )}
      </Transition.List>
    </>
  );
};

type LineProps = {
  title: string;
  className?: string;
  onClick?: (...args: any[]) => void;
};

const Line = React.forwardRef<any, LineProps>((props, ref) => {
  const { title, className, onClick } = props;

  return (
    <LineContent className={className} ref={ref}>
      <h1>{title}</h1>

      <Icon
        onClick={onClick}
        hoverColor="orange"
        name="icon-mianxing_fuzhi_guanbi"
        size="24"
      />
    </LineContent>
  );
});

const LineContent = styled.div\`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 18px;
  color: #666;
\`;
`}}]);
