import classNames from 'classnames';
import React, { FC, ReactElement, useContext } from 'react';
import { useMounted } from '../tools/hooks';
import './index.css';
import { FormContext } from './useForm';
import { FormItemRule } from './valitate';

interface FormItemProps {
  className?: string;
  children?: ReactElement;
  /**
   * label 标签的文本
   */
  label?: string;
  /**
   * 字段名
   */
  name?: string;
  /**
   * 设置收集字段值变更的时机
   */
  trigger?: 'onChange' | 'onBlur';
  /**
   * 校验规则，设置字段的校验逻辑。
   */
  rules?: FormItemRule[];
}

const FormItem: FC<FormItemProps> = (props) => {
  const { className, children, name, trigger, rules } = props;
  const formApi = useContext(FormContext);
  const clas = classNames('cat-form-item', className);

  useMounted(() => {
    formApi.regist(name, rules);
  });


  function onChange(e: any) {
    const value = e?.target?.value ? e.target.value : e
    const valuse = formApi.setValue(name, value);
    if (trigger === 'onChange') {
      formApi.validateItem(name, valuse);
    }
  }

  function onBlur() {
    if (trigger === 'onBlur') {
      const values = formApi.getForm();
      formApi.validateItem(name, values);
    }
  }

  const newChildren = React.Children.map(children, (child) => {
    if (!child) return null;
    return React.cloneElement(child, {
      value: formApi.getValue(name) || '',
      onChange,
      onBlur,
    });
  });

  return (
    <div className={clas}>
      <div className="cat-form-label">{props.label}</div>
      <div className="cat-form-right" data-err={formApi.getFormItemError(name)}>
        {newChildren}
      </div>
    </div>
  );
};

FormItem.defaultProps = {
  trigger: 'onChange',
};

export default FormItem;
