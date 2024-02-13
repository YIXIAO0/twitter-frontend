import {
  Button,
  Input,
  Form,
  Dialog,
} from 'antd-mobile';

import { loginService } from '../../services/login';

import './index.css';

import React from 'react';

const initialValues = {
  username: 'admin',
  password: '12345',
};

const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = async () => {
    const values = form.getFieldsValue();
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: 'Login successfully',
      });
      return;
    }
    Dialog.alert({
      content: 'Failed to login',
    });
  };
  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        model="card"
        initialValues={initialValues}
        footer={(
          <Button block color="primary" onClick={onSubmit} size="large">
            Log in
          </Button>
        )}
      >
        <Form.Item label="Username" name="username">
          <Input placeholder="Please enter username" clearable />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input placeholder="Please enter password" clearabe type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
