/**
 * desc: 用于配置一些固定组合。
 */
import { CSSProperties } from 'react';
import { Input, Icon } from 'catd';

const style: CSSProperties = { width: 300 };

const App = () => {
  return (
    <>
      <Input addOnBefore="http://" addOnAfter=".com" defaultValue="catd" style={style} />
      <br />
      <br />
      <Input
        addOnBefore="https://"
        addOnAfter={<Icon name="search" />}
        defaultValue="catd"
        maxLength={10}
        style={style}
      />
      <br />
      <br />
      <Input
        style={style}
        suffix={<Icon name="mic" />}
        addOnAfter={<Icon name="search" />}
        placeholder="placeholder..."
      />
      <br />
      <br />
      <Input prefix="http://" defaultValue="catd" suffix=".com" style={style} />
      <br />
      <br />
      <Input
        prefix={<Icon name="RectangleCopy1" size="21" />}
        placeholder="user name"
        suffix="x"
        style={style}
      />
    </>
  );
};

export default App;
