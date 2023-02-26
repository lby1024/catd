import classNames from 'classnames';
import { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'styled-components';
import './index.css';

interface ShowProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 显示隐藏
   */
  show: boolean;
  /**
   * 动画时间
   */
  duration?: number;
  children: ReactNode;
}
const Show = forwardRef<HTMLDivElement, ShowProps>((props, ref) => {

  const { show, children, duration = 300, style:styl } = props;
  const [visible, setVisible] = useState(show);
  const timer = useRef<any>(null);

  const clas = classNames({
    'cat-show': show,
    'cat-hide': !show,
  });

  function hide() {
    timer.current = setTimeout(() => setVisible(show), duration);
  }

  useEffect(() => {
    if (show) setVisible(show)
    else hide()
    return () => clearTimeout(timer.current);
  }, [show]);
  
  const style: CSSProperties = {
    animationDuration: `${duration / 1000}s`,
    ...styl
  };

  if (!visible) return null;
  return (
    <div className={clas} style={style} ref={ref} >
      {children}
    </div>
  );
})

Show.defaultProps = {
  duration: 300,
};

export default Show;
