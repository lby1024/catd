"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[9461],{4512:function(p,a,n){n.r(a),n.d(a,{demos:function(){return x}});var c=n(90228),d=n.n(c),i=n(87999),I=n.n(i),o=n(75271),m=n(55697),x={"src-button-demo-demo01":{component:o.memo(o.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,40573))})),asset:{type:"BLOCK",id:"src-button-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(12501).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:m},renderOpts:{compile:function(){var u=I()(d()().mark(function r(){var t,s=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4028).then(n.bind(n,54028));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,s));case 3:case"end":return e.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"src-button-demo-demo02":{component:o.memo(o.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,66341))})),asset:{type:"BLOCK",id:"src-button-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(75300).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:m},renderOpts:{compile:function(){var u=I()(d()().mark(function r(){var t,s=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4028).then(n.bind(n,54028));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,s));case 3:case"end":return e.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"src-button-demo-demo03":{component:o.memo(o.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,12692))})),asset:{type:"BLOCK",id:"src-button-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(44297).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:m},renderOpts:{compile:function(){var u=I()(d()().mark(function r(){var t,s=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4028).then(n.bind(n,54028));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,s));case 3:case"end":return e.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}}}},41035:function(p,a,n){n.r(a),n.d(a,{texts:function(){return c}});const c=[{value:`

  
  
  
  `,paraId:0},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u63CF\u8FF0",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u7528",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"size",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u5C3A\u5BF8",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"'lg' | 'sm' | 'md'",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"md",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"btnType",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u6309\u94AE\u7C7B\u578B",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"'primary' | 'default' | 'danger' | 'link'",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"'default'",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"loading",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u663E\u793A\u52A0\u8F7D\u52A8\u753B",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"boolen",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3}]},12501:function(p,a){a.Z=`import { Button } from 'catd';

export default () => (
  <div>
    <Button className="aaa" btnType="default">
      default
    </Button>
    <Button btnType="primary">pramiry</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link" href="http://www.baidu.com">
      link
    </Button>
  </div>
);`},75300:function(p,a){a.Z=`import { Button } from 'catd';

export default () => (
  <>
    <Button btnType="primary" size="lg">
      large
    </Button>
    <Button btnType="danger">default</Button>
    <Button btnType="default" size="sm">
      small
    </Button>
  </>
);
`},44297:function(p,a){a.Z=`import { Button } from 'catd';

export default () => (
  <>
    <Button btnType="primary" loading>
      loading...
    </Button>
    <Button btnType="danger" disabled>
      disable
    </Button>
    <Button btnType="link" href="http://www.baidu.com" disabled>
      link disable
    </Button>
  </>
);`}}]);
