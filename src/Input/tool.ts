import { useMounted } from "../tools/hooks";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { TextAreaProps } from "./Textarea";

/**
 * 和 props.value 双向绑定
 * 和 textarea.value 双向绑定
 */
export function useBind(props: TextAreaProps) {
  const { defaultValue, value: pv, onChange } = props;
  const [value, setV] = useState(defaultValue || pv || '');

  useEffect(() => {
    if ('value' in props) {
      setV(pv||'')
    }
  }, [pv]);

  function onInput(e: ChangeEvent<HTMLTextAreaElement>) {
    if (!('value' in props)) {
      setV(e.target.value);
    }
    onChange?.(e);
  }

  return [value, onInput] as const;
}

/**
 * <textarea /> autoSize 功能
 */
export function useAutoSize(props: TextAreaProps, value: string) {
  const { autoSize } = props;
  const areaRef = useRef<any>(null);
  const fakeRef = useRef<any>(null);

  // 最小高度&最大高度
  useMounted(() => {
    if (typeof autoSize === 'object') {
      const { minRow, maxRow } = autoSize;
      const fakeNode = fakeRef.current;
      fakeNode.setAttribute('rows', minRow);
      const minHeight = fakeNode.clientHeight;

      fakeNode.setAttribute('rows', maxRow);
      const maxHeight = fakeNode.clientHeight;

      areaRef.current.setAttribute(
        'style',
        `min-height: ${minHeight}px; max-height: ${maxHeight}px;`,
      );

      fakeNode.setAttribute('rows', 1);
    }
  });

  // 自动撑高
  const style = useMemo(() => {
    const fakeNode = fakeRef.current;
    const areaNode = areaRef.current;

    if (!props.autoSize) {
      return {};
    }

    if (fakeNode && areaNode) {
      fakeNode.value = value;
      const height: number = fakeNode.scrollHeight;
      return { height };
    }
    return {};
  }, [value]);

  return {
    style,
    areaRef,
    fakeRef,
  };
}
