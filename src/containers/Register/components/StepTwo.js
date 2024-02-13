import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd-mobile';
import Footer from './Footer';
import style from '../index.module.scss';

const StepTwo = ({
  confirmRegisterHandler,
  userInfo,
}) => {
  const [password, setPassword] = React.useState();
  const [disabled, setDisabled] = React.useState(true);

  const onConfirmRegister = () => {
    confirmRegisterHandler(password);
  };

  const onChangePwd = (val) => {
    setPassword(val);
  };

  const onChangeConfirmPwd = (val) => {
    if (val === password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  return (
    <div className={style.stepTwo}>
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <div className={style.showLabelContainer}>
          <div className={style.showLabel}>
            Name:
            <span className={style.showVal}>{userInfo.username}</span>
          </div>
          {userInfo.email && (
            <div className={style.showLabel}>
              Email:
              <span className={style.showVal}>{userInfo.email}</span>
            </div>
          )}
          {userInfo.tel && (
            <div className={style.showLabel}>
              Phone:
              <span className={style.showVal}>{userInfo.tel}</span>
            </div>
          )}
          <div className={style.showLabel}>
            Birthday:
            <span className={style.showVal}>{userInfo.birthday}</span>
          </div>
        </div>
        <div>
          <div className={style.label}>Please enter your password</div>
          <Input className={style.input} onChange={onChangePwd} type="password" />
          <div className={style.label}>Please enter your password again</div>
          <Input className={style.input} onChange={onChangeConfirmPwd} type="password" />
          {disabled && <div className={style.showTip}>Please enter the same password!</div>}
        </div>
        {/* <div className={style.formTitle}>You need a password</div> */}
      </div>
      <Footer disabled={disabled} label="Confirm" onClickNextStep={onConfirmRegister} />
    </div>
  );
};

StepTwo.propTypes = {
  confirmRegisterHandler: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,
    birthday: PropTypes.string,
  }).isRequired,
};

export default StepTwo;
