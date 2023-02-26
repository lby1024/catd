import React from "react"
import {Message, Uploader, UploadFile} from "catd"

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
      />
    </div>
  )
}