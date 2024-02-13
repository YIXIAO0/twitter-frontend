import React from 'react';
// import Header from '@components/Header';
import { Toast } from 'antd-mobile';
import { registerUser } from '@services/register';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

const STEP = {
  ONE: 1,
  TWO: 2,
};

/**
 * register page
 */
const Register = () => {
  const [step, setStep] = React.useState(STEP.ONE);
  const [userInfo, setUserInfo] = React.useState();

  const goToNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegisterHandler = async (password) => {
    const res = await registerUser({
      password,
      ...userInfo,
    });
    if (res.success) {
      Toast.show('Register successfully');
      return;
    }
    Toast.show('Failed to register');
    console.log('>>>', res);
  };

  // const onClickClose = () => {
  //   setStep(STEP.ONE);
  // };

  return (
    <div>
      {step === STEP.ONE && <StepOne goToNextStepHandler={goToNextStepHandler} />}
      {step === STEP.TWO && (
      <StepTwo
        userInfo={userInfo}
        confirmRegisterHandler={confirmRegisterHandler}
      />
      )}
    </div>
  );
};

export default Register;
