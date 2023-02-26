import { useDebounceFn } from '../tools/hooks';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { OverlayProps } from '../Overlay/Overlay';
import { PopupExp, Overlay } from '../index';
import './index.css';

type OverlayType = Pick<OverlayProps, 'children' | 'placement' | 'space' | 'duration'>;

interface PopupProps extends OverlayType {
  /**
   * 弹框类容
   */
  overLay: any;
  /**
   * 触发事件
   */
  trigger?: 'click' | 'hover';
}

const Popup = forwardRef<PopupExp, PopupProps>((props, ref) => {

  const { placement='right', children, overLay, trigger='hover', space, duration } = props;
  const btnRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const timer = useRef<any>(null);

  useImperativeHandle(ref, () => ({ setVisible }));

  const onMouseEnter = () => {
    if (trigger !== 'hover') return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setVisible(true);
    }, 100);
  };

  const onMouseLeave = () => {
    if (trigger !== 'hover') return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  const onClick = useDebounceFn(() => {
    if (trigger === 'click') setVisible(!visible);
  }, 100);

  const child = React.Children.only(children); // 只能传一个child 否则报错
  const newChild = React.cloneElement(child, {
    ...child.props,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ref: btnRef,
  });
  const newOverLay = React.cloneElement(overLay, {
    ...overLay.props,
    onMouseEnter,
    onMouseLeave,
  });

  return (
    <>
      {newChild}

      <Overlay
        btnRef={btnRef}
        visible={visible}
        onVisibleChange={(vi) => setVisible(vi)}
        placement={placement}
        space={space}
        duration={duration}
      >
        {newOverLay}
      </Overlay>
    </>
  );
});

export default Popup;
