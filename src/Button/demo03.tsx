import { Button } from 'catd';

export default () => (
  <>
    <Button btnType="primary" loading>
      loading...
    </Button>
    <Button btnType="danger" disabled>
      disable
    </Button>
    <Button btnType="link" href="http://www.baidu.com" disabled>
      link disable
    </Button>
  </>
);