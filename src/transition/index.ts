import { CSSTransition } from './CSSTransition';
import { SwitchTransition } from './SwitchTransition';

type TransitonProps = {
  Switch: typeof SwitchTransition;
  CSS: typeof CSSTransition;
};

const Transiton: TransitonProps = {
  Switch: SwitchTransition,
  CSS: CSSTransition,
};

export default Transiton;
