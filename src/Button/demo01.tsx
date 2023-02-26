import { Button } from 'catd';

export default () => (
  <div>
    <Button className="aaa" btnType="default">
      default
    </Button>
    <Button btnType="primary">pramiry</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link" href="http://www.baidu.com">
      link
    </Button>
  </div>
);