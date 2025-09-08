import { CSSTransition } from './CSSTransition';
import { SwitchTransition } from './SwitchTransition';

type CSSTransitionProps = typeof CSSTransition;

interface TransitonProps extends CSSTransitionProps {
  Switch: typeof SwitchTransition;
}

const Transiton = CSSTransition as TransitonProps;
Transiton.Switch = SwitchTransition;

export default Transiton;
