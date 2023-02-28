import { Icon, Uploader } from "catd"



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
}