import { render } from 'react-dom';
import Alert from '../Alert';
import './index.css'

let msgListRoot: HTMLElement;

export interface MsgProps {
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
  duration?: number;
}

const addMsg = (props: MsgProps) => {
  if (!msgListRoot) {
    msgListRoot = document.createElement('div');
    msgListRoot.className = 'cat-message-list'
    document.body.append(msgListRoot);
  }
  const item = document.createElement('div');
  item.className = 'cat-msg-item'
  item.setAttribute('style', `animation: showHide ${props.duration || 3}s linear forwards;`)
  msgListRoot.append(item);
  render(<Alert {...props} />, item);

  item.addEventListener('animationend', () => {
    item.remove()
  })
};

export default {
  success: (message: string) => addMsg({ type: 'success', message }),
  error: (message: string) => addMsg({ type: 'error', message }),
  info: (message: string) => addMsg({ type: 'info', message }),
  warning: (message: string) => addMsg({ type: 'warning', message }),
};
