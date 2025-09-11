import React, { FC } from 'react';
import { Transition, TransitionProps } from './Transition';

type Item = {
  id: string | number;
  [k: string]: any;
};

type ListTransitionProps = TransitionProps & {
  data: Item[];
};

export const ListTransition: FC<ListTransitionProps> = (props) => {
  const { children: render, data } = props;

  function renderItem(item: Item) {
    let vdom = render(item);
    vdom = React.cloneElement(vdom, {
      // key: item.id,
      ref: (node: HTMLElement) => refCB(node, item.id),
    });
  }

  function refCB(node: HTMLElement, id: string | number) {
    console.log(node, 1111111);
  }

  const transitionProps: TransitionProps = {
    ...props,
  };

  return (
    <Transition {...transitionProps}>
      {(list: any[]) => list.map((item) => renderItem(item))}
    </Transition>
  );
};
