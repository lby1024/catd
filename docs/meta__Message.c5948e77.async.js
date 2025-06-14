"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[5051],{80200:function(a,n,e){e.r(n),e.d(n,{demos:function(){return m}});var s=e(90228),o=e.n(s),u=e(87999),_=e.n(u),r=e(75271),c=e(44079),m={"src-message-demo-demo":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,99075))})),asset:{type:"BLOCK",id:"src-message-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73522).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:c},renderOpts:{compile:function(){var l=_()(o()().mark(function g(){var d,p=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1959).then(e.bind(e,1959));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,p));case 3:case"end":return t.stop()}},g)}));function i(){return l.apply(this,arguments)}return i}()}}}},7126:function(a,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:`Message.success('\u63D0\u793A\u5185\u5BB9');
Message.error('\u63D0\u793A\u5185\u5BB9');
Message.warning('\u63D0\u793A\u5185\u5BB9');
Message.info('\u63D0\u793A\u5185\u5BB9');
`,paraId:0,tocIndex:1}]},73522:function(a,n){n.Z=`import { Message, Button } from 'catd';

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
