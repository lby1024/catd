import classNames from 'classnames';
import { FC, TextareaHTMLAttributes } from 'react';
import { useAutoSize, useBind } from './tool';

type autoSizeType = { maxRow: number; minRow: number };

type NativeInputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface TextAreaProps extends NativeInputProps {
  className?: string;
  autoSize?: boolean | autoSizeType;
  showCount?: boolean;
  value?: string;
  defaultValue?: string;
}

const TextArea: FC<TextAreaProps> = (props) => {
  const { className, showCount, style, ...nativAreaProps } = props;
  const { maxLength } = nativAreaProps;
  const [value, onChange] = useBind(props);
  const { areaRef, fakeRef, style: areaStyle } = useAutoSize(props, value);

  const clas = classNames('cat-textarea', className, {
    'cat-textarea-count': showCount,
  });

  return (
    <span className={clas} data-count={`${value.length}/${maxLength}`} style={style}>
      <textarea
        {...nativAreaProps}
        value={value}
        onChange={onChange}
        ref={areaRef}
        style={areaStyle}
      />
      {/* 这个要隐藏起来 */}
      <textarea className="cat-area-fake" ref={fakeRef} />
    </span>
  );
};

export default TextArea;
