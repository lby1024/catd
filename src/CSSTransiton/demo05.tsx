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

      <Transition.CSS show={show} duration={1000}>
        <Icon className="icon" name="fabulous" size="28" />
      </Transition.CSS>

      <Transition.CSS show={!show} duration={1000}>
        <Icon className="icon" name="operation" size="28" />
      </Transition.CSS>
    </Content>
  );
};

const Content = styled.div`
  position: relative;
  .icon {
    position: absolute;
  }
  .enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1s;
  }

  .exit {
    opacity: 1;
    transform: translateX(0);
  }

  .exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 1s;
  }
`;
