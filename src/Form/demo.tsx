import { Form, Input, Button } from 'catd';

function rePasswordValidate(password: any, values: any) {
  if (values.password !== password) return '两次密码不一致';
}

const rules = {
  username: [{ required: true, min: 3, max: 6 }],
  password: [
    { required: true, msg: '必填' },
    { min: 6, msg: '密码太短了' },
    { max: 12, msg: '密码太长了' },
  ],
  repassword: [{ required: true, msg: '必填' }, { validator: rePasswordValidate }],
};


export default () => {
  function onFinish(values: any) {
    console.log(values, 'success');
  }

  function onFinishFailed(values: any) {
    console.log(values, 'fail');
  }

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} style={{ width: 600 }}>
      <Form.Item name="username" label="用户名" rules={rules.username}>
        <Input placeholder="username" />
      </Form.Item>
      <Form.Item name="password" label="密码" rules={rules.password}>
        <Input placeholder="password" />
      </Form.Item>
      <Form.Item name="repassword" label="重复密码" rules={rules.repassword}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button>提交</Button>
      </Form.Item>
    </Form>
  );
};
