/**
 * desc: 最简单的用法。
 */
import { Popup, Button, PopupExp, Icon } from 'catd';
import { useRef } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  color: #999;
  position: relative;
  .icon {
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
  }
`;

const App = () => {
  const popupRef = useRef<PopupExp>(null)

  const close = () => popupRef.current?.setVisible(false)

  const overLay = <Card>
    <span>离开消失</span>
    <Icon  className='icon' size='33' color='#ff4d4f' onClick={close} hoverColor='red' name='icon-mianxing_fuzhi_guanbi' />
  </Card>

  return (
    <Popup overLay={overLay} ref={popupRef}>
      <Button btnType='primary' >hover</Button>
    </Popup>
  );
};

export default App;
