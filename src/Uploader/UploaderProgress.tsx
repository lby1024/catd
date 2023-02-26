import { Progress, UploadFile } from "../index"
import { FC } from "react"
import classNames from "classnames"

interface UploaderProgressProps {
  file: UploadFile
}
/**
 * 这个组件的作用: 
 *  1,上传成功后,进度条慢慢消失
 *  2,上传失败后,进度条变红慢慢消失
 */
const UploaderProgress:FC<UploaderProgressProps> = (props) => {
  const {file} = props
  const color = file.status === 'error' ? '#ff4d4f' : '#1890ff'

  const clas = classNames({
    'cat-hide': file.status === 'error' || file.status === 'success'
  })
  
  return <Progress className={clas} showText={false} percent={file.percent} height={1} bgColor={color} />
}

export default UploaderProgress