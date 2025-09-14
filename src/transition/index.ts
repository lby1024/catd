import { CSSTransition } from './CSSTransition';
import { ListTransition } from './ListTransition';
import { SwitchTransition } from './SwitchTransition';
import { Transition as TransitionInside } from './Transition';

type TransitonProps = typeof TransitionInside & {
  Switch: typeof SwitchTransition;
  CSS: typeof CSSTransition;
  List: typeof ListTransition;
};

const Transiton = TransitionInside as TransitonProps;
Transiton.CSS = CSSTransition;
Transiton.Switch = SwitchTransition;
Transiton.List = ListTransition;

export default Transiton;
