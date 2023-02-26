---
toc: content #显示右侧导航
order: 9
group:
  title: 通用
  order: 9
---

# Menu

## horizon

<code src='./demo01.tsx' ></code>

## inline

<code src='./demo02.tsx' ></code>

## vertical

<code src='./demo03.tsx' ></code>

## API

### Menu
<API id="Menu"></API>

### Menu.Sub

<table>
  <tr>
    <th>属性名</th>
    <th>描述</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>

  <tr>
    <td>name</td>
    <td>item 的唯一标志</td>
    <td>string</td>
    <td></td>
  </tr>

  <tr>
    <td>title</td>
    <td>菜单项标题</td>
    <td>string</td>
    <td></td>
  </tr>

  <tr>
    <td>mode</td>
    <td>菜单类型，现在支持垂直、水平、和内嵌模式三种</td>
    <td>'inline' | 'vertical' | 'horizon'</td>
    <td>'inline'</td>
  </tr>
</table>

### Memu.Item

<table>
  <tr>
    <th>属性名</th>
    <th>描述</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>

  <tr>
    <td>name</td>
    <td>item 的唯一标志</td>
    <td>string</td>
    <td></td>
  </tr>
</table>
