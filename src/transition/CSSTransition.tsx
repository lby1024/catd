import { FC } from 'react';
import { Transition, TransitionProps } from './Transition';
import { useChild } from './hooks';
import { clear } from './utils';

export type CssTransitionProps = Omit<TransitionProps, 'data'> & {
  show: boolean;
};

export const CSSTransition: FC<CssTransitionProps> = (props) => {
  const { show, appear } = props;
  const child = useChild(props.children);

  const transitionProps: TransitionProps = {
    ...props,
    data: show,
    onAppear() {
      const node = child.ref?.current;
      clear(node);
      node?.classList.add('appear');
    },
    onAppearActive() {
      const node = child.ref?.current;
      node?.classList.add('appear-active');
    },
    onAppearDone() {
      const node = child.ref?.current;
      clear(node);
      node?.classList.add('appear-done');
    },
    onEnter() {
      const node = child.ref?.current;
      clear(node);
      node?.classList.add('enter');
    },
    onEnterActive() {
      const node = child.ref?.current;
      node?.classList.add('enter-active');
    },
    onEnterDone() {
      const node = child.ref?.current;
      clear(node);
      node?.classList.add('enter-done');
    },
    onExit() {
      const node = child.ref?.current;
      clear(node);
      node?.classList.add('exit');
    },
    onExitActive() {
      const node = child.ref?.current;
      node?.classList.add('exit-active');
    },
    onExitDone() {
      const node = child.ref?.current;
      clear(node);
      node?.classList.add('exit-done');
    },
    /**
     * 加载时执行动画
     */
    onMounted(runTasks) {
      if (show && appear) {
        runTasks('appear');
      }
    },
    /**
     * 淡出
     */
    onHide(runTasks) {
      return new Promise((resolve) => {
        if (show === false) {
          runTasks('exit').then(() => resolve(true));
        }
        // setValue -> onHide -> setData -> onShow
        // 下面如果不执行resolve, onHide 之后的任务将会被中断
        else {
          resolve(true);
        }
      });
    },
    /**
     * 淡入
     */
    onShow(runTasks) {
      show === true && runTasks('enter');
    },
  };

  return (
    <Transition {...transitionProps}>
      {(show: boolean) => show && child}
    </Transition>
  );
};
