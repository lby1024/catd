import classNames from "classnames";
import { FC, ReactNode, useState, DragEvent } from "react";

interface UploadDraggerProps {
  onFile: (files: FileList) => void
  children: ReactNode
}

export const UploadDragger: FC<UploadDraggerProps> = (props) => {
  const { onFile, children } = props
  const [ isOver, setOver ] = useState(false)
  const clas = classNames('cat-upload-drag', {
    'cat-uploader-over': isOver
  })

  const onDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setOver(over)
  }

  const onDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setOver(false)
    onFile(e.dataTransfer.files)
  }

  return (
    <div
      className={clas}
      onDragOver={e => onDrag(e, true)}
      onDragLeave={e => onDrag(e, false)}
      onDrop={onDrop}
    >
      {children}
    </div>
  )
}

export default UploadDragger