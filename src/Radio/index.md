---
toc: content #显示右侧导航
order: 555
group:
  title: 表单
  order: 2
---

# Radio

### 基础

```tsx
/**
 * desc: 最简单的用法。
 */
import React from 'react';
import { Radio } from '../index';

export default () => <Radio.Item>Radio</Radio.Item>;
```

### 不可用

```tsx
/**
 * desc: Radio 不可用。
 */
import React from 'react';
import { Radio } from 'catd';

export default () => (
  <>
    <Radio.Item disabled={true} checked={true}>
      Disabled
    </Radio.Item>
    <Radio.Item disabled={true}>Disabled</Radio.Item>
  </>
);
```

### 单选组合
<code src="./demo.tsx" ></code>

### API

RadioGroup
<API id='Radio'></API>

RadioItem

<table>
  <tr>
    <th>属性名</th>
    <th>描述</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>

  <tr>
    <td>checked</td>
    <td>指定当前是否选中</td>
    <td>boolean</td>
    <td>false</td>
  </tr>

  <tr>
    <td>disabled</td>
    <td>禁用 Radio</td>
    <td>boolean</td>
    <td>false</td>
  </tr>

  <tr>
    <td>value</td>
    <td>根据 value 进行比较，判断是否选中</td>
    <td>string</td>
    <td></td>
  </tr>

  <tr>
    <td>onChange</td>
    <td>选项变化时的回调函数</td>
    <td>(e: string) => void</td>
    <td></td>
  </tr>
  
</table>

