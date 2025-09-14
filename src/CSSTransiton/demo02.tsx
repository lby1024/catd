import { Button, Icon, Transition } from 'catd';
import React, { useState } from 'react';
import styled from 'styled-components';

const Hellow = React.forwardRef<any>((props, ref) => {
  return (
    <i ref={ref}>
      <Icon name="camera" size="24" />
      <i>hellow world</i>
    </i>
  );
});

export default () => {
  const [show, setShow] = useState(true);

  return (
    <Content>
      <Button onClick={() => setShow(!show)} btnType="primary">
        Toggle
      </Button>

      <Transition.CSS show={show} duration={1000} appear>
        <Hellow />
      </Transition.CSS>
    </Content>
  );
};

const Content = styled.div`
  i {
    font-size: 24px;
    display: inline-block;
    padding: 0px 12px;
  }

  .appear,
  .enter {
    opacity: 0;
    transform: translateX(-10%);
  }
  .appear-active,
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
