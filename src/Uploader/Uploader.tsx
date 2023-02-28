import { UploadFile} from '../index';
import { FC, ReactNode, useRef } from 'react';
import { useFiles } from './tool';
import { AxiosProgressEvent } from 'axios';
import UploaderList from './uploaderList';
import UploadDragger from './UploadDrag';
import './index.css'


interface UploaderProps {
  /**
   * @description 上传的地址	
   * @type string
   */
  action: string
  /**
   * @description 默认已经上传的文件列表	
   * @type object[]
   */
  defaultFiles?: UploadFile[]
  /**
   * @description 是否支持拖拽上传
   * @type boolean
   * @default false
   */
  drag?: boolean
  /**
   * @description 上传进度发生改变时的回调
   */
  onProgress?: (percent: number, file: UploadFile) => void
  /**
   * @description 上传成功时的回调
   */
  onSuccess?: (data: any, file: UploadFile) => void
  /**
   * @description 上传失败时的回调
   */
  onError?: (err: any, file: UploadFile) => void
  /**
   * @description 上传前的回调,一般用于检查文件大小格式
   */
  beforeUpload?: (file: File) => boolean | Promise<File>
  /**
   * @description 上传文件改变时的回调
   */
  onChange?: (file: UploadFile) => void
  /**
   * 删除文件时触发
   */
  onRemove?: (file: UploadFile) => void
  children?: ReactNode
}

const Uploader: FC<UploaderProps> = (props) => {
  const {
    action,
    defaultFiles,
    drag,
    children,
    onRemove,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
  } = props
  
  const files = useFiles(defaultFiles || [])
  const refInput = useRef<HTMLInputElement>(null)
  /*
  * 点击上传按钮时触发
  */ 
  function clickUploadBtn() {
    if (refInput.current) {
      refInput.current.click()
    }
  }
  /**
   * 上传进度
   */
  const onUploadProgress = (file:UploadFile) => (e: AxiosProgressEvent)=>{
    if (!e.total) return;
    let percent = (e.loaded * 100) / e.total;
    percent = Math.round(percent);
    if (percent < 100) {
      if(onProgress) onProgress(percent, file)
      files.update(file, {
        status: 'uploading',
        percent,
      })
    }
  }
  /**
   * 上传文件
   * raw: 源文件
   * */ 
  async function postFile(raw: File) {
    const file = files.create(raw)
    files.post({
      action,
      file: file.raw!,
      onUploadProgress: onUploadProgress(file)
    }).then(res => {
      if (onSuccess) onSuccess(res.data, file)
      if (onChange) onChange(file)
      files.update(file, {status: 'success', response: res.data, percent: 100})
    }).catch(async (error)  => {
      if (onError) onError(error, file)
      if (onChange) onChange(file)
      files.update(file, { status: 'error', error, percent: 50 })
      // 上传失败后添加一个进度条降为0的动画
      const timer = setTimeout(() => {
        files.update(file, { status: 'error', error, percent: 0 })
        clearTimeout(timer)
      }, 300)
    })
  }
  /** 
   * 上传文件前, 检查文件, 转换文件
   * beforeUpload return false时: 文件不合格不能上传
   * beforeUpload return Promise时: 对文件进行了转换
   */
  function checkFile(file: File) {
    if (!beforeUpload) {
      postFile(file)
      return
    } 
    const res = beforeUpload(file)
    if (res instanceof Promise) {
      res.then(file => postFile(file))
    } else if (res !== false) {
      postFile(file)
    }
  }
  /**
   * 选种文件后触发
   * */ 
  function uploadFiles(files: FileList|null) {
    if (!files) return
    let postFiles = Array.from(files)
    postFiles.forEach(file => checkFile(file))
  }
  /**
   * 删除文件
   */
  function onRemoveFile(file: UploadFile) {
    if(onRemove) onRemove(file)
    files.delet(file)
  }

  const Trigger = <div onClick={clickUploadBtn} >
    {drag ? <UploadDragger onFile={uploadFiles}>{children}</UploadDragger> : children}
  </div>

  return (
    <div className='cat-uploader' >
      {Trigger}
      <input
        className='cat-upload-input'
        style={{display: 'none'}}
        ref={refInput}
        onChange={(e) => uploadFiles(e.target.files)}
        type='file'
      />
      <UploaderList fileList={files.list} onRemove={onRemoveFile} />
    </div>
  )
}

export default Uploader;
