import { useState } from 'react';
import './index.css';


const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const clickHandler = () => {
    alert('Log in successfully!' + name + ',' + password) ;
  }

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div className="login">
        <div>Username: <input onChange={onChangeNameHandler} /> </div>
        <div>Password: <input type="password" onChange={onChangePasswordHandler} /> </div>
        <div><button onClick={clickHandler}>Log in</button></div>
    </div>
  );
}

export default Login;