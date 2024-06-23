"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[5051],{67141:function(a,e,n){n.r(e),n.d(e,{demos:function(){return i}});var s=n(17061),o=n.n(s),c=n(17156),u=n.n(c),r=n(62435),i={"src-message-demo-demo":{component:r.memo(r.lazy(function(){return n.e(2433).then(n.bind(n,32195))})),asset:{type:"BLOCK",id:"src-message-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(20593).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:n(31081)},renderOpts:{compile:function(){var l=u()(o()().mark(function g(){var d,M=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,M));case 3:case"end":return t.stop()}},g)}));function m(){return l.apply(this,arguments)}return m}()}}}},15606:function(a,e,n){n.r(e),n.d(e,{texts:function(){return s}});const s=[{value:`Message.success('\u63D0\u793A\u5185\u5BB9');
Message.error('\u63D0\u793A\u5185\u5BB9');
Message.warning('\u63D0\u793A\u5185\u5BB9');
Message.info('\u63D0\u793A\u5185\u5BB9');
`,paraId:0,tocIndex:1}]},20593:function(a,e){e.Z=`import { Message, Button } from 'catd';

const App = () => {
  const success = () => Message.success('MessageList' + new Date().getTime());
  const error = () => Message.error('MessageList' + new Date().getTime());
  const warning = () => Message.warning('MessageList' + new Date().getTime());
  const info = () => Message.info('MessageList' + new Date().getTime());

  return (
    <div>
      <Button onClick={info} btnType="primary">
        info
      </Button>

      <Button onClick={success}>success</Button>

      <Button onClick={error} btnType="danger">
        error
      </Button>

      <Button onClick={warning}>waring</Button>
    </div>
  );
};

export default App;
`}}]);
