import { Button, Icon, Transition } from 'catd';
import { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [show, setShow] = useState(true);

  return (
    <Content>
      <Button onClick={() => setShow(!show)} btnType="primary">
        Toggle
      </Button>

      <Transition.CSS show={show} duration={1000} className={'left'}>
        <Icon name="fabulous" size="28" />
      </Transition.CSS>

      <Transition.CSS show={show} duration={1000} className={'right'}>
        <Icon name="operation" size="28" />
      </Transition.CSS>
    </Content>
  );
};

const Content = styled.div`
  .left-enter {
    opacity: 0;
    transform: translateX(-50%);
  }

  .left-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1s;
  }

  .left-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .left-exit-active {
    opacity: 0;
    transform: translateX(-50%);
    transition: all 1s;
  }

  .right-enter {
    opacity: 0;
    transform: translateX(50%);
  }

  .right-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1s;
  }

  .right-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .right-exit-active {
    opacity: 0;
    transform: translateX(50%);
    transition: all 1s;
  }
`;
