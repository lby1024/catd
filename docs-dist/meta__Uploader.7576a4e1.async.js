"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[9380],{59644:function(i,t,n){n.r(t),n.d(t,{demos:function(){return y}});var c=n(17061),r=n.n(c),f=n(17156),m=n.n(f),a=n(62435),y={"src-uploader-demo-demo01":{component:a.memo(a.lazy(function(){return n.e(2433).then(n.bind(n,97116))})),asset:{type:"BLOCK",id:"src-uploader-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(64969).Z},react:{type:"NPM",value:"18.1.0"},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:n(62435),catd:n(31081)},renderOpts:{compile:function(){var d=m()(r()().mark(function s(){var o,u=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},s)}));function l(){return d.apply(this,arguments)}return l}()}},"src-uploader-demo-demo02":{component:a.memo(a.lazy(function(){return n.e(2433).then(n.bind(n,52192))})),asset:{type:"BLOCK",id:"src-uploader-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(22721).Z},react:{type:"NPM",value:"18.1.0"},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:n(62435),catd:n(31081)},renderOpts:{compile:function(){var d=m()(r()().mark(function s(){var o,u=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},s)}));function l(){return d.apply(this,arguments)}return l}()}},"src-uploader-demo-demo03":{component:a.memo(a.lazy(function(){return n.e(2433).then(n.bind(n,33071))})),asset:{type:"BLOCK",id:"src-uploader-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(85767).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:n(31081)},renderOpts:{compile:function(){var d=m()(r()().mark(function s(){var o,u=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,u));case 3:case"end":return e.stop()}},s)}));function l(){return d.apply(this,arguments)}return l}()}}}},41781:function(i,t,n){n.r(t),n.d(t,{texts:function(){return c}});const c=[]},64969:function(i,t){t.Z=`import React from "react"
import {Button, Icon, Message, Uploader } from "catd"

function check(file: File) {
  if (Math.round(file.size / 1024)>50000000) {
    Message.error('file to big')
    return false
  }
  return true
}

// function filePromise(file: File) {
//   const newFile = new File([file], 'new_name.docx', {type: file.type})
//   return Promise.resolve(newFile)
// }

export default () => {
  return (
    <div style={{maxWidth: 300}} >
      <Uploader
        beforeUpload={check}
        action="https://mock.apifox.cn/m1/1599304-0-default/upload"
      >
        <Button>
          <Icon name="file-open" /> 
          <span> Upload</span>
        </Button>
      </Uploader>
    </div>
  )
}`},22721:function(i,t){t.Z=`import React from "react"
import {Button, Message, Uploader, UploadFile} from "catd"

function check(file: File) {
  if (Math.round(file.size / 1024)>50000000) {
    Message.error('file to big')
    return false
  }
  return true
}

// function filePromise(file: File) {
//   const newFile = new File([file], 'new_name.docx', {type: file.type})
//   return Promise.resolve(newFile)
// }

const defaultFiles: UploadFile[] = [
  {
    uid: '1',
    name: 'xxx.png',
    status: 'uploading',
    percent: 60,
    url: 'http://www.baidu.com/xxx.png',
  },{
    uid: '2',
    name: 'yyy.png',
    status: 'success',
    url: 'http://www.baidu.com/yyy.png',
  },{
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  },
]

export default () => {
  return (
    <div style={{maxWidth: 300}} >
      <Uploader
        beforeUpload={check}
        defaultFiles={defaultFiles}
        action="https://mock.apifox.cn/m1/1599304-0-default/upload"
      >
        <Button>Upload</Button>
      </Uploader>
    </div>
  )
}`},85767:function(i,t){t.Z=`import { Icon, Uploader } from "catd"



export default () => {

  return (
    <div style={{maxWidth: 400}} >
      <Uploader drag={true} action="https://mock.apifox.cn/m1/1599304-0-default/upload" >
        <Icon size="39" color="#1890ff" name="add" />
        <h2>Click or drag file to this area to upload</h2>
        <p>Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
      </Uploader>
    </div>
  )
}`}}]);
