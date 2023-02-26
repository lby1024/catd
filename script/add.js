const { spawn } = require('child_process');
const glob = require('glob');
const fs = require('fs-extra')

// input --> Input
const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^.{1}/, m => m.toUpperCase());
// Input --> input
const lowCase = str => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^-/, '');

const basePath = process.cwd() // 获取根目录: /Users/boyang/reactapp
const curPath = __dirname 
const name = process.argv[2] // 获取 'node script/add input' 中的 'input'
const input = lowCase(name)
const Input = varCase(name)

async function addFile(filePath) {
  const content = await fs.readFile(filePath, 'utf-8')
  const newPath = filePath.replace('script/template', `src/${Input}`)
    .replace('ComName', Input)
  const newContent = content
    .replace(/ComName/g, Input)
  fs.writeFile(newPath, newContent)
}

async function addExport() {
  const filePath = `${basePath}/src/index.ts`
  const txt = `export { default as ${Input} } from './${Input}';`
  fs.appendFile(filePath, txt)
}

async function run() {
  // 创建文件夹
  spawn('mkdir', ['-p', `${basePath}/src/${Input}`])
  // 获取模板文件
  const tplFiles = glob.sync(`${curPath}/template/*`);
  // 写入新文件
  tplFiles.map(filePath => addFile(filePath))
  // 修改入口文件
  addExport()
}

run()
