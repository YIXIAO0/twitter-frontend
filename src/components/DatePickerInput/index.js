import style from './index.module.css';
import calendarIcon from '../../assets/calendar.png';
import React from 'react';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayInputTitle}>Date of birth</div>
      <div>
        <span className={style.birthdayInputValue}>mm/dd/yyyy</span>
        <img className={style.calendarIcon} src={calendarIcon} alt="calendarIcon"/>
      </div>
  </div>
);