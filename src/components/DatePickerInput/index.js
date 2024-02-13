import React from 'react';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import calendarIcon from '../../assets/calendar.png';

const DatePickerInput = ({
  value,
  onChange,
}) => {
  const [visible, setVisible] = React.useState(false);
  const onClickDatePicker = () => {
    setVisible(true);
  };
  return (
    <>
      <DatePicker
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        precision="day"
        onConfirm={(val) => {
          onChange(moment(val).format('MM/DD/YYYY'));
        }}
      />
      <div className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayInputTitle}>Date of birth</div>
        <div>
          <span className={style.birthdayInputValue}>{value ? moment(value).format('MM/DD/YYYY') : 'mm/dd/yyyy'}</span>
          <img className={style.calendarIcon} src={calendarIcon} alt="calendarIcon" />
        </div>
      </div>
    </>
  );
};

DatePickerInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

DatePickerInput.defaultProps = {
  value: '',
  onChange: () => {},
};

export default DatePickerInput;
