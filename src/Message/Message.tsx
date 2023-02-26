import { render } from 'react-dom';
import MessageList from './MessageList';

let msgListRoot: HTMLElement;

export interface MsgProps {
  msg: string;
  type: 'success' | 'warning' | 'error' | 'info';
  duration?: number;
}

const addMsg = (props: MsgProps) => {
  if (!msgListRoot) {
    msgListRoot = document.createElement('div');
    document.body.append(msgListRoot);
    render(<MessageList />, msgListRoot);
  }

  MessageList.add({
    ...props,
    duration: props.duration || 3000,
    time: new Date().getTime(),
  });
};

export default {
  success: (msg: string) => addMsg({ type: 'success', msg }),
  error: (msg: string) => addMsg({ type: 'error', msg }),
  info: (msg: string) => addMsg({ type: 'info', msg }),
  warning: (msg: string) => addMsg({ type: 'warning', msg }),
};
