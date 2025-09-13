import 'animate.css';
import { Button, Icon, Transition } from 'catd';
import { ClassNames } from 'catd/Transition/types';
import { useState } from 'react';

export default () => {
  const [show, setShow] = useState(true);

  const names: ClassNames = {
    'enter-active': 'animate__fadeInDown',
    'exit-active': 'animate__fadeOutDown',
    'appear-active': 'animate__backInRight',
  };

  return (
    <>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        Toggle
      </Button>

      <Transition.Switch
        show={show}
        duration={400}
        className={names}
        inTurn
        appear
      >
        <Icon
          className="animate__animated animate__fast"
          name="file-open"
          size="28"
        />
        <Icon
          className="animate__animated animate__fast"
          name="fabulous"
          size="28"
        />
      </Transition.Switch>
    </>
  );
};
