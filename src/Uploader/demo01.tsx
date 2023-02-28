import React from "react"
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
}