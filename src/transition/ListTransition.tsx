import React, { FC, useRef } from 'react';
import { useWatch } from './hooks';
import { Transition, TransitionProps } from './Transition';
import { ClassNames, ListItem } from './types';
import { clear, diff, sleep } from './utils';

type ListTransitionProps = TransitionProps & {
  data: ListItem[];
};

export const ListTransition: FC<ListTransitionProps> = (props) => {
  const { children: render, data } = props;
  const domMapRef = useRef(new Map<string | number, HTMLElement>());
  const deleteItemsRef = useRef<ListItem[]>([]);
  const newItemsRef = useRef<ListItem[]>([]);

  // data变化, 触发回调函数, 获取到newData和oldData
  useWatch((newData, oldData = []) => {
    const { deleteOnes, newOnes } = diff(oldData, newData);
    deleteItemsRef.current = deleteOnes;
    newItemsRef.current = newOnes;
  }, data);

  const transitionProps: TransitionProps = {
    ...props,
    // 数据变化前, 是否要执行隐藏动画
    async onHide(run) {
      await sleep(1); // 等待上面的useWatch回调函数执行完毕,再继续
      if (deleteItemsRef.current?.length) {
        await run('exit');
      }
    },
    // 数据变化后, 是否要执行显示动画
    async onShow(run) {
      if (newItemsRef.current?.length) {
        await run('enter');
      }
    },
    onAppear(names) {
      const newItems = newItemsRef.current;
      addClassName(newItems, names, 'appear');
    },
    onAppearActive(names) {
      const newItems = newItemsRef.current;
      addClassName(newItems, names, 'appear-active', false);
    },
    onAppearDone(names) {
      const newItems = newItemsRef.current;
      addClassName(newItems, names, 'appear-done');
    },
    onEnter(names) {
      const newItems = newItemsRef.current;
      addClassName(newItems, names, 'enter');
    },
    onEnterActive(names) {
      const newItems = newItemsRef.current;
      addClassName(newItems, names, 'enter-active', false);
    },
    onEnterDone(names) {
      const newItems = newItemsRef.current;
      addClassName(newItems, names, 'enter-done');
    },
    onExit(names) {
      const deleteItems = deleteItemsRef.current;
      addClassName(deleteItems, names, 'exit');
    },
    onExitActive(names) {
      const deleteItems = deleteItemsRef.current;
      addClassName(deleteItems, names, 'exit-active', false);
    },
    onExitDone(names) {
      const deleteItems = deleteItemsRef.current;
      addClassName(deleteItems, names, 'exit-done');
    },
  };

  return (
    <Transition {...transitionProps}>
      {(list: ListItem[]) => list.map(renderItem)}
    </Transition>
  );

  // 给 DOM 添加 className
  function addClassName(
    items: ListItem[] | undefined,
    names: ClassNames,
    key: keyof ClassNames,
    clearFirst = true,
  ) {
    if (!items?.length) return;

    items.forEach((item) => {
      const node = domMapRef.current.get(item.id);
      if (node) {
        if (clearFirst) {
          clear(names, node);
        }
        node.classList.add(names[key]!);
      }
    });
  }

  // ref的回调函数
  function handleRef(node: HTMLElement | null, id: string | number) {
    if (node) {
      domMapRef.current.set(id, node);
    } else {
      domMapRef.current.delete(id);
    }
  }

  function renderItem(item: ListItem) {
    const vdom = render(item);
    return React.cloneElement(vdom, {
      ref: (node: HTMLElement | null) => handleRef(node, item.id),
    });
  }
};
