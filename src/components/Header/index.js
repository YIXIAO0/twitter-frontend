import { CloseOutlined } from "@ant-design/icons";
import logo from '../../assets/twitter.png'
import style from './index.module.css';
import React from "react";

export default () => (
  <div className={style.header}>
    <CloseOutlined className={style.closeIcon}/>
    <img src={logo} alt="twitter-logo" className={style.twitterLogo}/>
  </div>
);