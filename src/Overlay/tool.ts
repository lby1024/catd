import { CSSProperties, RefObject, useCallback, useEffect, useRef, useState } from "react";
import { OverlayProps } from "./Overlay";


/**
 * 点击空白处 隐藏 overlay
 */
export function useClickOut(refs: RefObject<any>[], hide: () => any) {
  function fn(e: MouseEvent) {
    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];
      if (ref.current?.contains(e.target)) return;
    }
    hide();
  }

  useEffect(() => {
    document.addEventListener('click', fn);
    return () => document.removeEventListener('click', fn);
  }, []);
}

function getPlacement(props: OverlayProps, overLayNode: HTMLElement): CSSProperties {
  const { btnRef, placement, space = 0 } = props;
  if (!btnRef.current) {
    return {};
  }

  const { top, left, width, height } = btnRef.current.getBoundingClientRect();
  const { scrollLeft, scrollTop } = document.documentElement;
  const style: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
  };

  if (placement === 'bottom') {
    style.top = scrollTop + top + height + space;
    style.left = scrollLeft + left;
  }
  if (placement === 'right') {
    style.top = scrollTop + top;
    style.left = scrollLeft + left + width + space;
  }
  if (placement === 'left') {
    style.top = scrollTop + top;
    style.left = scrollLeft + left - overLayNode.offsetWidth - space;
  }
  if (placement === 'top') {
    style.top = scrollTop + top - overLayNode.offsetHeight - space;
    style.left = scrollLeft + left;
  }

  return style;
}
/**
 * 弹框的位置
 */
export function usePosition(props: OverlayProps) {
  const overLayRef = useRef<any>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const overLayCb = useCallback((overLayNode: HTMLDivElement) => {
    overLayRef.current = overLayNode;
    if (overLayNode) {
      const positon = getPlacement(props, overLayNode);
      setStyle(positon);
    }
  }, []);

  return [overLayCb, overLayRef, style] as const;
}
