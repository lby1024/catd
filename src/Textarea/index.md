---
toc: content #显示右侧导航
order: 555
group:
  title: 表单
  order: 2
---

# TextArea

### 基本使用

<code src='./demo.tsx'></code>

### 自动撑高

<code src='./demo02.tsx'></code>

### 最大行最小行

最小 3 行, 最大 7 行
<code src='./demo03.tsx'></code>

### Api

<table>
  <tr>
    <th>属性名</th>
    <th>描述</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>

  <tr>
    <td>autoSize</td>
    <td>自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }</td>
    <td>boolean | object</td>
    <td>false</td>
  </tr>

  <tr>
    <td>showCount</td>
    <td>是否展示字数</td>
    <td>boolean</td>
    <td>false</td>
  </tr>

  <tr>
    <td>value</td>
    <td>输入框内容</td>
    <td>string</td>
    <td></td>
  </tr>

  <tr>
    <td>defaultValue</td>
    <td>输入框默认内容</td>
    <td>string</td>
    <td></td>
  </tr>
</table>
