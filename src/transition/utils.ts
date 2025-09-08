export function clear(node?: HTMLElement | null) {
  if (!node) return;

  node.classList.remove("appear");
  node.classList.remove("appear-active");
  node.classList.remove("appear-done");

  node.classList.remove("enter");
  node.classList.remove("enter-active");
  node.classList.remove("enter-done");

  node.classList.remove("exit");
  node.classList.remove("exit-active");
  node.classList.remove("exit-done");
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
