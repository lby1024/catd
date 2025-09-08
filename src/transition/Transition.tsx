import { FC, useEffect, useState } from "react";
import { useTime, useWatch } from "./hooks";
import { nullFn } from "./utils";

type CSSCallback = () => any;
type UpdateCallback = (run: RunTask, props: TransitionProps) => any;
type RunTask = (type: "appear" | "enter" | "exit") => Promise<any>;

export type TransitionProps = {
  data: any;
  duration: number;
  children?: any;
  appear?: boolean;
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
    children,
    data,
    appear,
    onMounted = nullFn,
    onShow = nullFn,
    onHide = nullFn,
  } = props;

  const [value, setValue] = useState(data);
  const getChild = children;
  const [updateTime, same] = useTime();

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
      const { duration } = props;
      const time = updateTime();

      onWill(); // 第一阶段: class="enter"
      void document.body.offsetHeight; // 触发回流(不能在同一帧修改css, 否则动画不生效)
      onActive(); // 第二阶段: class="enter enter-active"
      setTimeout(() => {
        if (same(time) === false) return;
        onDone();
        resolve(true);
      }, duration);
    });
  };

  useEffect(() => {
    onMounted(runTasks, props);
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
    [data],
    false // false表示:页面加载完成后不会自动执行callback
  );

  return <>{getChild(value)}</>;
};
