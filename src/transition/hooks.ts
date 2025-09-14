import React, { useEffect, useRef } from 'react';

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

type DataCB<T> = (newData: T, oldData?: T) => void;

export function useWatch<T>(cb: DataCB<T>, data: T, auto = true) {
  const oldRef = useRef<T>(data);
  const mounted = useRef(false);

  useEffect(() => {
    const newData = data;
    const oldData = oldRef.current;
    can() && cb(newData, oldData);
    return () => {
      oldRef.current = data;
    };
  }, [data]);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  function can() {
    if (auto === false && mounted.current === false) {
      return false;
    }
    return true;
  }
}
