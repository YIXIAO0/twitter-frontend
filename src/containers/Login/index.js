import {
  Button,
  Form,
  Dialog,
} from 'antd-mobile';
import React from 'react';
import Header from '@components/Header';
import TInput from '@components/TInput';
import { login } from '../../services/login';
import style from './index.module.scss';

// const initialValues = {
//   username: 'admin',
//   password: '12345',
// };

/**
 * Login Page
 */
const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const res = await login(values.username, values.password);
      if (res.success && res.data.length > 0) {
        Dialog.alert({
          content: 'Login successfully',
        });
        return;
      }
      Dialog.alert({
        content: 'Failed to login',
      });
    }
  };
  return (
    <div className={style.login}>
      <Header />
      <div className={style.formTitle}>Sign in to Twitter</div>
      <Form
        form={form}
        className={style.formContainer}
        // initialValues={initialValues}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <TInput label="username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <TInput label="password" type="password" />
        </Form.Item>
        <Button className={style.footerButton} onClick={onSubmit}>
          Next
        </Button>
      </Form>
      <div className={style.goToRegister}>
        Do not have an account? &nbsp;
        <a
          href="/"
          target="_blank"
        >
          Register
        </a>
      </div>
    </div>
  );
};
export default Login;
