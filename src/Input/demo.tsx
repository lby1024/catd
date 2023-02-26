/**
 * desc: 基本使用
 */
import { CSSProperties } from 'react';
import { Input } from 'catd';

const style: CSSProperties = { width: 150 };
const App = () => {
  return <Input placeholder="base use" style={style} />;
};

export default App;
