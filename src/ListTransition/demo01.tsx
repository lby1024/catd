import 'animate.css';
import { Button, Input, Transition } from 'catd';
import { ClassNames } from 'catd/Transition/types';
import { useState } from 'react';

export default () => {
  const [data, setData] = useState([
    { id: 0, title: 'jack' },
    { id: 1, title: 'tom' },
  ]);

  const [v, setV] = useState('');

  const names: ClassNames = {
    'enter-active': 'animate__fadeInRight',
    'exit-active': 'animate__fadeOutDown',
  };

  function add() {
    const newOne = {
      id: new Date().getTime(),
      title: v,
    };

    setData([...data, newOne]);
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
        addOnAfter={<Button onClick={add}>add</Button>}
      />
      <Transition.List data={data} duration={800} className={names}>
        {(item: any) => (
          <div
            className="animate__animated"
            key={item.id}
            onClick={() => dele(item.id)}
          >
            {item.title}
          </div>
        )}
      </Transition.List>
    </>
  );
};
