"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[9327],{25857:function(a,e,n){n.r(e),n.d(e,{demos:function(){return _}});var o=n(90228),r=n.n(o),m=n(87999),l=n.n(m),d=n(75271),u=n(55697),_={"src-dropdown-demo-demo01":{component:d.memo(d.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,67809))})),asset:{type:"BLOCK",id:"src-dropdown-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(79628).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:u},renderOpts:{compile:function(){var c=l()(r()().mark(function p(){var s,f=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(4028).then(n.bind(n,54028));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,f));case 3:case"end":return t.stop()}},p)}));function i(){return c.apply(this,arguments)}return i}()}}}},6226:function(a,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},79628:function(a,e){e.Z=`import { Dropdown, Icon, DropItem, Button, Message} from "catd"

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
