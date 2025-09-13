import { FC, useEffect, useRef, useState } from 'react';
import { useTime, useWatch } from './hooks';
import { ClassNames } from './types';
import { nullFn } from './utils';

type CSSCallback = (names: Required<ClassNames>) => any;
type UpdateCallback = (run: RunTask, props: TransitionProps) => any;
type RunTask = (type: 'appear' | 'enter' | 'exit') => Promise<any>;

export type TransitionProps = {
  data: any;
  duration: number;
  children?: any;
  appear?: boolean;
  className?: string | ClassNames;
  onEnter?: CSSCallback;
  onEnterActive?: CSSCallback;
  onEnterDone?: CSSCallback;
  onExit?: CSSCallback;
  onExitActive?: CSSCallback;
  onExitDone?: CSSCallback;
  onAppear?: CSSCallback;
  onAppearActive?: CSSCallback;
  onAppearDone?: CSSCallback;
  onMounted?: UpdateCallback;
  onShow?: UpdateCallback;
  onHide?: UpdateCallback;
};

export const Transition: FC<TransitionProps> = (props) => {
  const {
    children: render,
    data,
    appear,
    duration,
    onMounted = nullFn,
    onShow = nullFn,
    onHide = nullFn,
  } = props;

  const [value, setValue] = useState(data);
  const [updateTime, same] = useTime();
  const classNames = useClassNames(props);

  let tasks = {
    appear: [props.onAppear, props.onAppearActive, props.onAppearDone],
    enter: [props.onEnter, props.onEnterActive, props.onEnterDone],
    exit: [props.onExit, props.onExitActive, props.onExitDone],
  };

  /**
   * 一次修改className
   * 如果没有抛出错误: onUpdateBefore() -> update() -> onUpdateAfter()
   * 如果抛出错误: onUpdateBefore() -> 后面的任务将被中断
   */
  const runTasks: RunTask = async (type) => {
    return new Promise((resolve) => {
      const [onWill = nullFn, onActive = nullFn, onDone = nullFn] = tasks[type];
      const time = updateTime();
      const names = classNames.current;

      onWill(names); // 第一阶段: class="enter"
      void document.body.offsetHeight; // 触发回流(不能在同一帧修改css, 否则动画不生效)
      onActive(names); // 第二阶段: class="enter enter-active"
      setTimeout(() => {
        if (same(time) === false) return;
        onDone(names); // 第三阶段: class="enter-done"
        resolve(true);
      }, duration);
    });
  };

  useEffect(() => {
    appear && onMounted(runTasks, props);
  }, []);

  useWatch(
    () => {
      onHide(runTasks, props).then(() => {
        setValue(data);
        requestAnimationFrame(() => {
          onShow(runTasks, props);
        });
      });
    },
    data,
    false, // mounted阶段不触发
  );

  return <>{render(value)}</>;
};

function useClassNames(props: TransitionProps) {
  const { className } = props;

  const classNames = useRef<Required<ClassNames>>({
    // enter
    ['enter']: 'enter',
    ['enter-active']: 'enter-active',
    ['enter-done']: 'enter-done',
    // exit
    ['exit']: 'exit',
    ['exit-active']: 'exit-active',
    ['exit-done']: 'exit-done',
    // appear
    ['appear']: 'appear',
    ['appear-active']: 'appear-active',
    ['appear-done']: 'appear-done',
  });

  useEffect(() => {
    if (!className) {
      return;
    }

    if (typeof className === 'string') {
      addPreFix(className);
    } else {
      upDateClassNames(className);
    }
  }, [className]);

  function addPreFix(prefix: string) {
    const names = classNames.current;
    const keys = Object.keys(names) as Array<keyof typeof names>;
    keys.forEach((key) => {
      const name = names[key];
      classNames.current[key] = `${prefix}-${name}`;
    });
  }

  function upDateClassNames(className: ClassNames) {
    const names = className;
    const keys = Object.keys(names) as Array<keyof typeof names>;
    keys.forEach((key) => {
      const name = names[key];
      if (name) {
        classNames.current[key] = name;
      }
    });
  }

  return classNames;
}
