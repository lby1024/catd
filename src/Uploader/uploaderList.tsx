import { Icon, UploadFile } from "../index";
import { FC } from "react";
import classNames from "classnames";
import React from "react";
import UploaderProgress from "./UploaderProgress";

interface UploaderListProps {
  fileList: UploadFile[]
  onRemove: (file: UploadFile) => void
}

export const UploaderList: FC<UploaderListProps> = (props) => {

  const {
    fileList,
    onRemove
  } = props

  const clasLi = (status: UploadFile['status']) => {
    return classNames('cat-uploader-li', {
      [`cat-file-${status}`]: status
    })
  }  

  function remove(file: UploadFile) {
    const dom = document.getElementById(file.uid)
    dom?.setAttribute('class', `${dom.className} cat-upload-hide`)
    if (onRemove) {
      const timer = setTimeout(() => {
        onRemove(file)
        clearTimeout(timer)
      }, 500)
    }
  }

  return <ul className="cat-uploader-ul">
    {fileList.map(file => {
      return <React.Fragment key={file.uid}>
        <li className={clasLi(file.status)} id={file.uid} >
          <Icon name="file" className="icon" size="18" />
          <span className='cat-file-name' >{file.name}</span>
          {file.status === 'error' && <Icon size="24" className="icon status" name='icon-mianxing_fuzhi_gaojing'/>}
          {file.status === 'success' && <Icon size="24" className="icon status" name='icon-mianxing_fuzhi_anquanfanghu'/>}
          {file.status === 'uploading' && <Icon size="20" className="icon status cat-loading" name='loading'/>}
          {file.status === 'ready' && <Icon size="20" className="icon status cat-loading" name='loading' color="gray" />}
          <Icon className="icon remove" size="24" onClick={() => remove(file)} color='orange' name="icon-mianxing_fuzhi_guanbi" />
        </li>
        <UploaderProgress file={file} />
      </React.Fragment>
    })}
  </ul>
}

export default UploaderList