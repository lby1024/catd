/**
 * desc: 对value进行加工
 */
import { AutoComplete } from 'catd';

const App = () => {
  function onSearch(wd: string) {
    const emails = ['qq', 'gmail', '163'];
    return emails.map((v) => ({ value: `${wd}@${v}.com` }));
  }

  return <AutoComplete onSearch={onSearch} style={{ width: 300 }} placeholder='请输入邮箱' />;
};

export default App;
