"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[9327],{4593:function(r,e,n){n.r(e),n.d(e,{demos:function(){return u}});var o=n(17061),a=n.n(o),m=n(17156),l=n.n(m),s=n(62435),u={"src-dropdown-demo-demo01":{component:s.memo(s.lazy(function(){return n.e(2433).then(n.bind(n,14411))})),asset:{type:"BLOCK",id:"src-dropdown-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(14249).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:n(31081)},renderOpts:{compile:function(){var c=l()(a()().mark(function f(){var d,p=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,p));case 3:case"end":return t.stop()}},f)}));function i(){return c.apply(this,arguments)}return i}()}}}},37389:function(r,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},14249:function(r,e){e.Z=`import { Dropdown, Icon, DropItem, Button, Message} from "catd"

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
