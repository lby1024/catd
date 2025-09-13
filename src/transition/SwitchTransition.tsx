import { FC } from 'react';
import styled from 'styled-components';
import { CSSTransition } from './CSSTransition';
import { useNode } from './hooks';
import { Transition, TransitionProps } from './Transition';
import { clear, getNode } from './utils';

type SwitchTransitionProps = Omit<TransitionProps, 'data'> & {
  show: boolean;
  inTurn?: boolean;
};

export const SwitchTransition: FC<SwitchTransitionProps> = (props) => {
  if (props.inTurn) return <SwitchTransitionInturn {...props} />;
  return <SwitchTransitionTogether {...props} />;
};

const SwitchTransitionInturn: FC<SwitchTransitionProps> = (props) => {
  const { show, children } = props;
  const itemShow = useNode(children[0]);
  const itemHide = useNode(children[1]);

  const transitonProps: TransitionProps = {
    ...props,
    data: show,
    // appear
    onAppear(names) {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      clear(names, node);
      node?.classList.add(names['appear']);
    },
    onAppearActive(names) {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      node?.classList.add(names['appear-active']);
    },
    onAppearDone(names) {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      clear(names, node);
      node?.classList.add(names['appear-done']);
    },
    // exit
    onExit(names) {
      const node = show ? getNode(itemHide) : getNode(itemShow);
      clear(names, node);
      node?.classList.add(names['exit']);
    },
    onExitActive(names) {
      const node = show ? getNode(itemHide) : getNode(itemShow);
      node?.classList.add(names['exit-active']);
    },
    onExitDone(names) {
      const node = show ? getNode(itemHide) : getNode(itemShow);
      clear(names, node);
      node?.classList.add(names['exit-done']);
    },
    // enter
    onEnter(names) {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      clear(names, node);
      node?.classList.add(names['enter']);
    },
    onEnterActive(names) {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      node?.classList.add(names['enter-active']);
    },
    onEnterDone(names) {
      const node = show ? getNode(itemShow) : getNode(itemHide);
      clear(names, node);
      node?.classList.add(names['enter-done']);
    },
    onMounted(runTasks) {
      runTasks('appear');
    },
    async onHide(runTasks) {
      await runTasks('exit');
    },
    async onShow(runTasks) {
      await runTasks('enter');
    },
  };

  return (
    <Transition {...transitonProps}>
      {(show: boolean) => (show ? itemShow : itemHide)}
    </Transition>
  );
};

const SwitchTransitionTogether: FC<SwitchTransitionProps> = (props) => {
  const { children } = props;
  const itemShow = useNode(children[0]);
  const itemHide = useNode(children[1]);

  return (
    <Content>
      <div className="item">
        <CSSTransition {...props}>{itemShow}</CSSTransition>
      </div>

      <div className="item">
        <CSSTransition {...props} show={!props.show}>
          {itemHide}
        </CSSTransition>
      </div>
    </Content>
  );
};

const Content = styled.div`
  position: relative;
  .item {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
