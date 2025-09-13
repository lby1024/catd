import { ClassNames, ListItem } from './types';

export function clear(classNames: ClassNames, node?: HTMLElement | null) {
  if (!node) return;

  const classKeys: (keyof ClassNames)[] = [
    'appear',
    'appear-active',
    'appear-done',
    'enter',
    'enter-active',
    'enter-done',
    'exit',
    'exit-active',
    'exit-done',
  ];

  const tokens = classKeys
    .map((key) => classNames[key])
    .filter((v): v is string => Boolean(v));

  if (tokens.length) {
    node.classList.remove(...tokens);
  }
}

export function nullFn() {}

export function sleep(delay = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

type VNode = React.FunctionComponentElement<{
  ref: React.RefObject<HTMLElement>;
}>;

export function getNode(vnode: VNode): HTMLElement | null {
  return vnode.ref?.current ?? null;
}

export function diff(oldList: ListItem[], newList: ListItem[]) {
  const oldMap = new Map(oldList.map((item) => [item.id, item]));
  const newMap = new Map(newList.map((item) => [item.id, item]));

  // 找出新增的项目
  const newOnes = newList.filter((item) => !oldMap.has(item.id));

  // 找出被删除的项目
  const deleteOnes = oldList.filter((item) => !newMap.has(item.id));

  return { newOnes, deleteOnes };
}
