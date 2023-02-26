import { Button } from 'catd';

export default () => (
  <>
    <Button btnType='primary' size="lg">
      large
    </Button>
    <Button btnType="danger">default</Button>
    <Button btnType="default" size="sm">
      small
    </Button>
  </>
);