export interface UploadFile {
  uid: string;    //uid: `file-${new Date().getTime()}`,
  name: string;   // name: fileRaw.name,
  status: 'ready' | 'uploading' | 'success' | 'error'; // ready 等待上传
  percent?: number;
  raw?: File; // 源文件
  size?: number;
  response?: any;
  error?: any;
  url?: string;
}
export interface UploadItemProps {
  type: 'success' | 'error' | 'uploading' | 'add';
  file?: UploadFile;
  onRemove?: (file: UploadFile) => void;
  onPreview?: (file: UploadFile) => void;
}

export interface ModalApi {
  show: (file: UploadFile) => void;
}

export interface DropItem {
  key: string
  label: string
  value?: any
  disable?: boolean,
  danger?: boolean,
  icon?: any
}

export interface PopupExp {
  setVisible: (v: boolean) => any
}

export type CalendarDate = {
  date: Date,
  key: number,
  disabled: boolean, // 是否可选择
  flag: 'cur' | 'prev' | 'next',
  today: boolean, // 是否是今天
}
