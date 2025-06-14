"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[9327],{44769:function(r,n,e){e.r(n),e.d(n,{demos:function(){return u}});var o=e(90228),a=e.n(o),m=e(87999),_=e.n(m),d=e(75271),l=e(44079),u={"src-dropdown-demo-demo01":{component:d.memo(d.lazy(function(){return e.e(2433).then(e.bind(e,4330))})),asset:{type:"BLOCK",id:"src-dropdown-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56128).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:l},renderOpts:{compile:function(){var c=_()(a()().mark(function p(){var s,f=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1959).then(e.bind(e,1959));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,f));case 3:case"end":return t.stop()}},p)}));function i(){return c.apply(this,arguments)}return i}()}}}},28150:function(r,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[]},56128:function(r,n){n.Z=`import { Dropdown, Icon, DropItem, Button, Message} from "catd"

const menu:DropItem[] = [
  {
    key: '0',
    label: '1st menu item'
  }, {
    key: '1',
    label: '2nd menu item',
    disable: true,
    icon: <Icon name='operation' />
  }, {
    key: '2',
    label: '3rd menu item',
  }, {
    key: '3',
    label: 'a danger menu item',
    danger: true
  }
]

export default () => {

  const choose = (item: DropItem) => {
    if(item.danger) Message.error(item.label)
    else Message.info(item.label)
  }

  return <Dropdown menu={menu} onChoose={choose} >
    <Button>Hover me <Icon name="arrow-down-bold"/></Button>
  </Dropdown>
}`}}]);
