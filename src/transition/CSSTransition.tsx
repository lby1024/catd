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
    onAppear(names) {
      const node = child.ref?.current;
      clear(names, node);
      node?.classList.add(names['appear']); // appear="appear" or "test-appear" or "fadeOutLeft"
    },
    onAppearActive(names) {
      const node = child.ref?.current;
      const name = names['appear-active'];
      node?.classList.add(name); // // name="appear-active" or "test-appear-active" or "fadeOutLeft"
    },
    onAppearDone(names) {
      const node = child.ref?.current;
      clear(names, node);
      const name = names['appear-done'];
      node?.classList.add(name);
    },
    onEnter(names) {
      const node = child.ref?.current;
      clear(names, node);
      node?.classList.add(names['enter']);
    },
    onEnterActive(names) {
      const node = child.ref?.current;
      const name = names['enter-active'];
      node?.classList.add(name);
    },
    onEnterDone(names) {
      const node = child.ref?.current;
      clear(names, node);
      const name = names['enter-done'];
      node?.classList.add(name);
    },
    onExit(names) {
      const node = child.ref?.current;
      clear(names, node);
      const name = names['exit'];
      node?.classList.add(name);
    },
    onExitActive(names) {
      const node = child.ref?.current;
      const name = names['exit-active'];
      node?.classList.add(name);
    },
    onExitDone(names) {
      const node = child.ref?.current;
      clear(names, node);
      const name = names['exit-done'];
      node?.classList.add(name);
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
      console.log(show, 111111111);
      show === true && runTasks('enter');
    },
  };

  return (
    <Transition {...transitionProps}>
      {(show: boolean) => show && child}
    </Transition>
  );
};
