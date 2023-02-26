---
toc: content #显示右侧导航
order: 221
group:
  title: 表单
  order: 2
---

# Form

### 注册

<code src='./demo.tsx'></code>

### 登录

<code src='./demo02.tsx'></code>

### API

Form

<API id="Form"></API>

FormItem


<table>
  <tr>
    <th>属性名</th>
    <th>描述</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>

  <tr>
    <td>label</td>
    <td>标签的文本</td>
    <td>string</td>
    <td></td>
  </tr>

  <tr>
    <td>name</td>
    <td>尺寸字段名</td>
    <td>string</td>
    <td></td>
  </tr>

  <tr>
    <td>trigger</td>
    <td>设置收集字段值变更的时机</td>
    <td>'onChange' | 'onBlur'</td>
    <td>'onChange'</td>
  </tr>

  <tr>
    <td>rules</td>
    <td>校验规则，设置字段的校验逻辑。</td>
    <td>FormItemRule[]</td>
    <td></td>
  </tr>
</table>
