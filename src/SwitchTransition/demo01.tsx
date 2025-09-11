import 'animate.css';
import { Button, Icon, Transition } from 'catd';
import { ClassNames } from 'catd/Transition/types';
import { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [show, setShow] = useState(true);

  const names: ClassNames = {
    'enter-active': 'animate__fadeInDown',
    'exit-active': 'animate__fadeOutDown',
  };

  return (
    <Content>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        Toggle
      </Button>

      <Transition.Switch show={show} duration={1000} className={names}>
        <Icon className="animate__animated" name="file-open" size="28" />
        <Icon className="animate__animated" name="fabulous" size="28" />
      </Transition.Switch>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
`;
