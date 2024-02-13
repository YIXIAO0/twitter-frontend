import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import logo from '../../assets/twitter.png';
import style from './index.module.css';

const Header = ({
  onClickClose,
}) => (
  <div className={style.header}>
    <CloseOutlined className={style.closeIcon} onClick={onClickClose} />
    <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
  </div>
);

Header.propTypes = {
  onClickClose: PropTypes.func.isRequired,
};

export default Header;
