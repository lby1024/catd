import 'animate.css';
import { Button, Icon, Transition } from 'catd';
import { ClassNames } from 'catd/Transition/types';
import { useState } from 'react';

export default () => {
  const [show, setShow] = useState(true);

  const names: ClassNames = {
    'enter-active': 'animate__bounce',
    'exit-active': 'animate__bounceOutDown',
  };

  return (
    <>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        Toggle
      </Button>

      <Transition.CSS show={show} duration={1000} className={names}>
        <Icon className="animate__animated" name="fabulous" size="28" />
      </Transition.CSS>
    </>
  );
};
