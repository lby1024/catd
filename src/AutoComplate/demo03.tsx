/**
 * desc: 可以返回自定义的 Option results
 */
import styled from 'styled-components';
import { AutoComplete, Icon } from 'catd';
import { AutoItemType } from 'src/AutoComplate/AutoComplete';
import { jsonp } from './jsonp';

type Item = {
  value: string;
  results?: number;
};

const ListItem = styled.div`
  line-height: 2em;
  display: flex;
  justify-content: space-between;
  span {
    color: #999;
  }
`;

const App = () => {
  async function onSearch(wd: string) {
    let res: any = await jsonp({
      url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
      params: { wd },
      cbName: 'show',
    });
    function radom() {
      let n = Math.random() * 100;
      return Math.floor(n);
    }
    res = res.s.map((value: string) => ({ value, results: radom() }));

    return res;
  }

  const renderItem = (item: AutoItemType<Item>) => (
    <ListItem>
      {item.value}
      <span>{item.results} result</span>
    </ListItem>
  );

  return (
    <AutoComplete
      onSearch={onSearch}
      style={{ width: 300 }}
      renderItem={renderItem}
      addOnAfter={<Icon name="search" />}
      placeholder='search'
    />
  );
};

export default App;

