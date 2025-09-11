import { ClassNames } from './types';
export function clear(classNames: ClassNames, node?: HTMLElement | null) {
  if (!node) return;

  node.classList.remove(classNames['appear']);
  node.classList.remove(classNames['appear-active']);
  node.classList.remove(classNames['appear-done']);

  node.classList.remove(classNames['enter']);
  node.classList.remove(classNames['enter-active']);
  node.classList.remove(classNames['enter-done']);

  node.classList.remove(classNames['exit']);
  node.classList.remove(classNames['exit-active']);
  node.classList.remove(classNames['exit-done']);
}

export function nullFn() {}

export function sleep(delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
}

type VNode = React.FunctionComponentElement<{
  ref: React.RefObject<HTMLElement>;
}>;

export function getNode(vnode: VNode) {
  return vnode.ref?.current;
}
