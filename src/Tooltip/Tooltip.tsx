import classNames from 'classnames';
import React, { FC, ReactElement } from 'react';
import Popup from '../Popup';
import './index.css';

interface TooltipProps {
  /**
   * 显示类容
   */
  text: string;
  /**
   * 显示位置
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactElement;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { placement, children, text } = props;
  const tipClass = classNames('cat-tooltip', {
    [`cat-tooltip-${placement}`]: placement,
  });

  let Card = (
    <div className={tipClass}>
      <div className="text">{text}</div>
      <div className="arrow"></div>
    </div>
  );

  return (
    <Popup overLay={text ? Card : <></>} placement={placement} duration={0}>
      {children}
    </Popup>
  );
};

Tooltip.defaultProps = {
  placement: 'top',
};

export default Tooltip;
