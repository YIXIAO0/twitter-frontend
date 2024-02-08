import React from 'react';
import { Button, Form } from 'antd-mobile';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';
import TInput from '@components/TInput';
import style from './index.module.scss';

const ACCOUNT_TYPE = {
  TEL: 0,
  EMAIL: 1,
};
/**
 * register page
 */
const Register = () => {
  const [form] = Form.useForm();
  const [formData] = React.useState({
    name: '',
    tel: '',
    email: '',
    birthday: '20000212',
  });

  const [accountType, setAccountType] = React.useState(ACCOUNT_TYPE.TEL);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.TEL) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
      return;
    }
    setAccountType(ACCOUNT_TYPE.TEL);
  };

  const onClickNextStep = async () => {
    try {
      await form.validateFields();
      const data = form.getFieldsValue();
      console.log(data);
      // Proceed with your next step logic here
    } catch (error) {
      console.log('Validation failed', error);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form form={form} initialValues={formData} className={style.formContainer}>
          <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <TInput length={50} label="Name" />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
          <Form.Item
            name="tel"
            rules={[{ required: true, message: 'Please input your phone!' }]}
          >
            <TInput length={11} label="Phone" />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <TInput length={30} label="Email" />
          </Form.Item>
          )}
          <div className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === ACCOUNT_TYPE.TEL ? 'Change to email' : 'Change to phone'}
          </div>
          <div className={style.dateOfBirth}>Date of birth</div>
          <div className={style.privacyNotice}>
            This will not be shown publicly. Confirm your own age, even if this account
            is for a business, a pet, or something else.
          </div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <div className={style.footer}>
        <Button shape="rounded" color="primary" className={style.footerButton} onClick={onClickNextStep}>Next</Button>
      </div>
    </div>
  );
};

export default Register;
