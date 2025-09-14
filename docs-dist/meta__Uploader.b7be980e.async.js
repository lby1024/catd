"use strict";(self.webpackChunkcatd=self.webpackChunkcatd||[]).push([[9380],{12225:function(m,t,n){var r;n.r(t),n.d(t,{demos:function(){return v}});var y=n(90228),l=n.n(y),h=n(87999),c=n.n(h),o=n(75271),p=n(55697),v={"src-uploader-demo-demo01":{component:o.memo(o.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,71019))})),asset:{type:"BLOCK",id:"src-uploader-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(42976).Z},react:{type:"NPM",value:"18.3.1"},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:r||(r=n.t(o,2)),catd:p},renderOpts:{compile:function(){var d=c()(l()().mark(function u(){var a,i=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4028).then(n.bind(n,54028));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},u)}));function s(){return d.apply(this,arguments)}return s}()}},"src-uploader-demo-demo02":{component:o.memo(o.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,81885))})),asset:{type:"BLOCK",id:"src-uploader-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(58375).Z},react:{type:"NPM",value:"18.3.1"},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{react:r||(r=n.t(o,2)),catd:p},renderOpts:{compile:function(){var d=c()(l()().mark(function u(){var a,i=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4028).then(n.bind(n,54028));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},u)}));function s(){return d.apply(this,arguments)}return s}()}},"src-uploader-demo-demo03":{component:o.memo(o.lazy(function(){return Promise.all([n.e(5713),n.e(2433)]).then(n.bind(n,2809))})),asset:{type:"BLOCK",id:"src-uploader-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(1003).Z},catd:{type:"NPM",value:"1.0.5"}},entry:"index.tsx"},context:{catd:p},renderOpts:{compile:function(){var d=c()(l()().mark(function u(){var a,i=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(4028).then(n.bind(n,54028));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},u)}));function s(){return d.apply(this,arguments)}return s}()}}}},75526:function(m,t,n){n.r(t),n.d(t,{texts:function(){return r}});const r=[]},42976:function(m,t){t.Z=`import React from "react"
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
}`},58375:function(m,t){t.Z=`import React from "react"
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
}`},1003:function(m,t){t.Z=`import { Icon, Uploader } from "catd"



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
