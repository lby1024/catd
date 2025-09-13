import 'animate.css';
import { Icon, Input, Transition } from 'catd';
import { ClassNames } from 'catd/Transition/types';
import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [v, setV] = useState('');
  const [data, setData] = useState([
    { id: 0, title: 'jack' },
    { id: 1, title: 'tom' },
    { id: 2, title: 'lily' },
    { id: 3, title: 'lucy' },
  ]);

  const names: ClassNames = {
    'enter-active': 'animate__slideInDown',
    'exit-active': 'animate__fadeOutDown',
    'appear-active': 'animate__slideInUp',
  };

  function add() {
    if (!v) return;

    const newOne = {
      id: new Date().getTime(),
      title: v,
    };

    setData([newOne, ...data]);
    setV('');
  }

  function dele(id: number) {
    const res = data.filter((item) => item.id !== id);
    setData(res);
  }

  return (
    <>
      <Input
        placeholder="添加..."
        value={v}
        onChange={(e) => setV(e.target.value)}
        addOnAfter="add"
        onAfterClick={add}
      />

      <Transition.List data={data} duration={800} className={names} appear>
        {(item: any) => (
          <Line
            className="animate__animated animate__fast"
            key={item.id}
            title={item.title}
            onClick={() => dele(item.id)}
          />
        )}
      </Transition.List>
    </>
  );
};

type LineProps = {
  title: string;
  className?: string;
  onClick?: (...args: any[]) => void;
};

const Line = React.forwardRef<any, LineProps>((props, ref) => {
  const { title, className, onClick } = props;

  return (
    <LineContent className={className} ref={ref}>
      <h1>{title}</h1>

      <Icon
        onClick={onClick}
        hoverColor="orange"
        name="icon-mianxing_fuzhi_guanbi"
        size="24"
      />
    </LineContent>
  );
});

const LineContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 18px;
  color: #666;
`;
