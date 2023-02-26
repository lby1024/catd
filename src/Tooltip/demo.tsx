/**
 * desc: 最简单的用法。
 */
import { Tooltip } from 'catd';

const App = () => {
  return (
    <Tooltip text="prompt text">
      <div>Tooltip will show on mouse enter.</div>
    </Tooltip>
  );
};

export default App;
