"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[252],{41466:function(l,e,n){n.r(e),n.d(e,{demos:function(){return I}});var u=n(17061),s=n.n(u),v=n(17156),i=n.n(v),t=n(62435),I={"src-form-demo-demo":{component:t.memo(t.lazy(function(){return n.e(2433).then(n.bind(n,41188))})),asset:{type:"BLOCK",id:"src-form-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(74411).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:n(31081)},renderOpts:{compile:function(){var o=i()(s()().mark(function m(){var r,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(7335).then(n.bind(n,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,p));case 3:case"end":return a.stop()}},m)}));function d(){return o.apply(this,arguments)}return d}()}},"src-form-demo-demo02":{component:t.memo(t.lazy(function(){return n.e(2433).then(n.bind(n,77596))})),asset:{type:"BLOCK",id:"src-form-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(22472).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:n(31081)},renderOpts:{compile:function(){var o=i()(s()().mark(function m(){var r,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(7335).then(n.bind(n,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,p));case 3:case"end":return a.stop()}},m)}));function d(){return o.apply(this,arguments)}return d}()}}}},61523:function(l,e,n){n.r(e),n.d(e,{texts:function(){return u}});const u=[{value:"Form",paraId:0,tocIndex:3},{value:"FormItem",paraId:1},{value:`

  
  
  
  `,paraId:2},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"\u5C5E\u6027\u540D",paraId:3},{value:`
    `,paraId:3},{value:"\u63CF\u8FF0",paraId:3},{value:`
    `,paraId:3},{value:"\u7C7B\u578B",paraId:3},{value:`
    `,paraId:3},{value:"\u9ED8\u8BA4\u503C",paraId:3},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"label",paraId:3},{value:`
    `,paraId:3},{value:"\u6807\u7B7E\u7684\u6587\u672C",paraId:3},{value:`
    `,paraId:3},{value:"string",paraId:3},{value:`
    `,paraId:3},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"name",paraId:3},{value:`
    `,paraId:3},{value:"\u5C3A\u5BF8\u5B57\u6BB5\u540D",paraId:3},{value:`
    `,paraId:3},{value:"string",paraId:3},{value:`
    `,paraId:3},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"trigger",paraId:3},{value:`
    `,paraId:3},{value:"\u8BBE\u7F6E\u6536\u96C6\u5B57\u6BB5\u503C\u53D8\u66F4\u7684\u65F6\u673A",paraId:3},{value:`
    `,paraId:3},{value:"'onChange' | 'onBlur'",paraId:3},{value:`
    `,paraId:3},{value:"'onChange'",paraId:3},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"rules",paraId:3},{value:`
    `,paraId:3},{value:"\u6821\u9A8C\u89C4\u5219\uFF0C\u8BBE\u7F6E\u5B57\u6BB5\u7684\u6821\u9A8C\u903B\u8F91\u3002",paraId:3},{value:`
    `,paraId:3},{value:"FormItemRule[]",paraId:3},{value:`
    `,paraId:3},{value:`
  `,paraId:3}]},74411:function(l,e){e.Z=`import { Form, Input, Button } from 'catd';

function rePasswordValidate(password: any, values: any) {
  if (values.password !== password) return '\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4';
}

const rules = {
  username: [{ required: true, min: 3, max: 6 }],
  password: [
    { required: true, msg: '\u5FC5\u586B' },
    { min: 6, msg: '\u5BC6\u7801\u592A\u77ED\u4E86' },
    { max: 12, msg: '\u5BC6\u7801\u592A\u957F\u4E86' },
  ],
  repassword: [{ required: true, msg: '\u5FC5\u586B' }, { validator: rePasswordValidate }],
};


export default () => {
  function onFinish(values: any) {
    console.log(values, 'success');
  }

  function onFinishFailed(values: any) {
    console.log(values, 'fail');
  }

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} style={{ width: 600 }}>
      <Form.Item name="username" label="\u7528\u6237\u540D" rules={rules.username}>
        <Input placeholder="username" />
      </Form.Item>
      <Form.Item name="password" label="\u5BC6\u7801" rules={rules.password}>
        <Input placeholder="password" />
      </Form.Item>
      <Form.Item name="repassword" label="\u91CD\u590D\u5BC6\u7801" rules={rules.repassword}>
        <Input placeholder='repeat' />
      </Form.Item>
      <Form.Item>
        <Button>\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
  );
};
`},22472:function(l,e){e.Z=`import { Form, Input, Button } from 'catd';

const initialValues = {
  username: 'jack',
};

const rules = {
  username: [{ required: true, min: 3, max: 6 }],
  password: [
    { required: true, msg: '\u5FC5\u586B' },
    { min: 6, msg: '\u5BC6\u7801\u592A\u77ED\u4E86' },
    { max: 12, msg: '\u5BC6\u7801\u592A\u957F\u4E86' },
  ],
};

export default () => {
  function onFinish(values: any) {
    console.log(values, 'success');
  }

  function onFinishFailed(values: any) {
    console.log(values, 'fail');
  }

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={initialValues}
      style={{ width: 600 }}
    >
      <Form.Item name="username" label="\u7528\u6237\u540D" rules={rules.username} trigger="onBlur">
        <Input placeholder="username" />
      </Form.Item>

      <Form.Item name="password" label="\u5BC6\u7801" rules={rules.password}>
        <Input placeholder="password" />
      </Form.Item>

      <Form.Item>
        <Button>\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
  );
};
`}}]);
