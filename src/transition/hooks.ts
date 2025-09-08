import React from "react";
import { useEffect, useRef } from "react";

/**
 *
 * @param cb 回调函数
 * @param deps 依赖
 * @param auto 页面加载完成后是否自动触发
 */
export function useWatch(cb: Function, deps: any[], auto = true) {
  const mountedRef = useRef(false);

  // 必须写在上面, 顺序很重要
  useEffect(() => {
    if (auto === true) {
      cb();
      return;
    }

    if (mountedRef.current === true) {
      cb();
    }
  }, deps);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
}

export function useChild(children: any) {
  const nodeRef = useRef<HTMLElement>(null);

  let child = React.Children.only(children);

  return React.cloneElement(child, {
    ref: nodeRef,
  });
}

export function useNode(item: any) {
  const nodeRef = useRef<HTMLElement>(null);

  return React.cloneElement(item, {
    ref: nodeRef,
  });
}

export function useTime() {
  const timeRef = useRef(0);

  function updateTime() {
    const curTime = new Date().getTime();
    timeRef.current = curTime;
    return curTime;
  }

  function sameTime(time: number) {
    if (time === timeRef.current) return true;
    return false;
  }

  return [updateTime, sameTime] as const;
}
