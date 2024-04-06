import { Children, cloneElement, FC, ReactElement, RefObject } from 'react';
import ReactDom from 'react-dom';
import Show from '../Show';
import { useClickOut, usePosition } from './tool';
import './index.css';

export interface OverlayProps {
  children: ReactElement;
  /**
   * 显示隐藏
   */
  visible: boolean;
  /**
   * 点击空白处触发
   */
  onVisibleChange: (visible: boolean) => void;
  /**
   * 按钮ref
   */
  btnRef: RefObject<HTMLElement>;
  /**
   * 显示位置
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * 按钮和弹框的间距
   */
  space?: number;
  /**
   * 动画时长
   */
  duration?: number;
}

const Overlay: FC<OverlayProps> = (props) => {
  const { children, visible, onVisibleChange, btnRef, duration } = props;
  const [overLayCb, overLayRef, style] = usePosition(props);
  useClickOut([overLayRef, btnRef], () => onVisibleChange(false));

  if (duration !== 0) {
    const Content = 
      <Show duration={duration} show={visible} style={style} ref={overLayCb} >
        {children}
      </Show>
    // 直接将原始挂载到 document.body下面
    return ReactDom.createPortal(
      Content,
      document.body,
    );    
  }
  // 如果不需要淡入淡出动画, 就不用 Show 组件
  else {
    const child = Children.only(children); // 只能传一个child 否则报错
    const newChild = cloneElement(child, {
      ref: overLayCb,
      style: { ...child.props.style, ...style },
    });    
  
    if(!visible) return null
    return ReactDom.createPortal(newChild, document.body)
  }

};

Overlay.defaultProps = {
  placement: 'bottom',
  space: 0,
  duration: 320,
};

export default Overlay;
