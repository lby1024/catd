/**
 * desc: 最简单的用法。
 */
import { AutoComplete, Icon } from 'catd';
import { jsonp } from './jsonp';

const App = () => {
  async function onSearch(wd: string) {
    let res: any = await jsonp({
      url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
      params: { wd },
      cbName: 'show',
    });
    res = res.s.map((value: string, index: number) => ({ value, index }));

    return res;
  }

  return (
    <AutoComplete
      onSearch={onSearch}
      style={{ width: 300 }}
      prefix={<Icon name="search" />}
      placeholder='search' />
  );
};

export default App;


