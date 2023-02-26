/**
 * desc: 一组互斥的 Radio 配合使用。
 */

import { Radio } from 'catd';
import { useState } from 'react';

export default () => {
  const [v, setV] = useState('1')

  return (<>

    <div onClick={() => setV('3')} >ccc</div>
    <Radio.Group value={v}>
      <Radio.Item value="1">A</Radio.Item>
      <Radio.Item value="2">B</Radio.Item>
      <Radio.Item value="3">C</Radio.Item>
    </Radio.Group>
  </>
  )
}