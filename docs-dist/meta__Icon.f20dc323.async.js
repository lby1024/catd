"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[2031],{54963:function(o,e,n){n.r(e),n.d(e,{demos:function(){return l}});var t=n(17061),d=n.n(t),m=n(17156),i=n.n(m),r=n(62435),l={"src-icon-demo-demo":{component:r.memo(r.lazy(function(){return n.e(2433).then(n.bind(n,23333))})),asset:{type:"BLOCK",id:"src-icon-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(29976).Z},catd:{type:"NPM",value:"1.0.5"},"styled-components":{type:"NPM",value:"5.3.11"}},entry:"index.tsx"},context:{catd:n(31081),"styled-components":n(19521)},renderOpts:{compile:function(){var u=i()(d()().mark(function p(){var c,I=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(7335).then(n.bind(n,37335));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,I));case 3:case"end":return a.stop()}},p)}));function s(){return u.apply(this,arguments)}return s}()}}}},21378:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:`

  
  
  `,paraId:0},{value:`
  `,paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:`
  `,paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"name",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u56FE\u6807\u540D",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:`
  `,paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"color",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u989C\u8272",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:`
  `,paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"hoverColor",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u60AC\u505C\u65F6\u7684\u989C\u8272",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:`
  `,paraId:1,tocIndex:2}]},29976:function(o,e){e.Z=`/**
 */
import { FC } from 'react';
import { Icon, Message } from 'catd';
import styled from 'styled-components';

const Card = styled.div\`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 6px;
  cursor: copy;
  &:hover {
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  }
  .name {
    font-size: 12px;
    padding-top: 12px;
    text-align: center;
    width: 100px; /*\u5FC5\u987B\u8BBE\u7F6E\u5BBD\u5EA6*/
    overflow: hidden; /*\u6EA2\u51FA\u9690\u85CF*/
    text-overflow: ellipsis; /*\u4EE5\u7701\u7565\u53F7...\u663E\u793A*/
    white-space: nowrap; /*\u5F3A\u5236\u4E0D\u6362\u884C*/
  }
\`;

const list = [
  { name: 'add' },
  { name: 'camera' },
  { name: 'chart-bar' },
  { name: 'comment' },
  { name: 'chart-pie' },
  { name: 'cry' },
  { name: 'customer-service' },
  { name: 'delete' },
  { name: 'data-view' },
  { name: 'discount' },
  { name: 'electronics' },
  { name: 'film' },
  { name: 'fabulous' },
  { name: 'folder-close' },
  { name: 'filter' },
  { name: 'file-open' },
  { name: 'menu' },
  { name: 'loading' },
  { name: 'notification' },
  { name: 'mic' },
  { name: 'operation' },
  { name: 'picture' },
  { name: 'save' },
  { name: 'search' },
  { name: 'security' },
  { name: 'time' },
  { name: 'telephone-out' },
  { name: 'user' },
  { name: 'arrow-up-bold' },
  { name: 'arrow-down-bold' },
  { name: 'RectangleCopy' },
  { name: 'RectangleCopy1' },
  { name: 'icon-mianxing_fuzhi_guanbi' },
  { name: 'icon-mianxing_fuzhi_anquanfanghu' },
  { name: 'icon-mianxing_fuzhi_gaojing' },
  { name: 'icon-mianxing_fuzhi_xiaoxi' },
  { name: 'jiantou_liebiaoxiangyou' },
  { name: 'jiantou_liebiaoxiangzuo' },
  { name: 'jiantou_yemian_xiangyou' },
  { name: 'jiantou_yemian_xiangzuo' },
  { name: 'file' },
];

const App: FC = () => {
  function copy(name: string) {
    Message.success(\`\u590D\u5236\u6210\u529F:\${name} \u{1F38A}\`);
    navigator.clipboard.writeText(name);
  }

  return (
    <div>
      {list.map((item) => (
        <Card onClick={() => copy(item.name)} key={item.name} >
          <Icon name={item.name} size="30" />
          <div className="name">{item.name}</div>
        </Card>
      ))}
    </div>
  );
};

export default App;
`}}]);
