import axios from "axios"
import { UploadFile } from "../index"
import { useState } from "react"

type UploadPostParams = {
  action: string,
  file: File,
  onUploadProgress: any
}

type UploadFileUpdate = (target: UploadFile, params: Partial<UploadFile>) => void

export const useFiles = (defaultList: UploadFile[]) => {
  const [files, setFiles] = useState<UploadFile[]>(defaultList)

  const update: UploadFileUpdate = (target, params) => {
    setFiles(files => {
      return files.map(file => {
        if (file.uid === target.uid) return {...file, ...params}
        return file
      })
    })
  }

  const create = (fileRaw: File) => {
    const file: UploadFile = {
      uid: `file-${new Date().getTime()}`,
      status: 'ready',
      size: fileRaw.size,
      name: fileRaw.name,
      percent: 0,
      raw: fileRaw
    }
    setFiles(files => [file, ...files])
    return file
  }

  const post = (params: UploadPostParams) => {
    const {file, action, onUploadProgress} = params
    const formData = new FormData()
    formData.append(file.name, file)
    return axios.post(action, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress
    })
  }

  const delet = (file: UploadFile) => {
    setFiles(files => {
      return files.filter(item => item.uid !== file.uid)
    })
  }

  return {
    list: files,
    create,
    update,
    post,
    delet,
    setFiles
  }
}