import React from 'react';
import { Button, Input, Form } from 'antd-mobile';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';
import style from './index.module.scss';

const ACCOUNT_TYPE = {
  TEL: 0,
  EMAIL: 1,
};
/**
 * register page
 */
const Register = () => {
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

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form initialValues={formData} className={style.formContainer}>
          <Form.Item name="name">
            <Input placeholder="Name" className={style.input} />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
          <Form.Item name="tel">
            <Input placeholder="Phone" className={style.input} />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item name="email">
            <Input placeholder="Email" className={style.input} />
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
        <Button shape="rounded" color="primary" className={style.footerButton}>Next</Button>
      </div>
    </div>
  );
};

export default Register;
