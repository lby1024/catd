import { Button, Transition } from 'catd';
import { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [show, setShow] = useState(true);

  return (
    <Content>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        Toggle
      </Button>

      <Transition.CSS show={show} duration={1000}>
        <span>hellow world</span>
      </Transition.CSS>
    </Content>
  );
};

const Content = styled.div`
  span {
    font-size: 24px;
    display: inline-block;
  }
  .enter {
    opacity: 0;
    transform: translateX(-10%);
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
    transform: translateX(10%);
    transition: all 1s;
  }
`;
