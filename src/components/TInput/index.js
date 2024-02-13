// import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd-mobile';
import React from 'react';
import style from './index.module.scss';
/**
 * Interactive Input
 */
const TInput = ({
  label,
  value,
  length,
  onChange,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hide, setHide] = React.useState(false);

  React.useEffect(() => {
    if (value) {
      setIsFocused(true);
      setHide(true);
    }
  }, []);

  const onFocus = () => {
    setIsFocused(true);
    setHide(true);
  };

  const onBlur = () => {
    if (!value || value.length === 0) {
      setIsFocused(false);
      setHide(false);
    }
    setHide(false);
  };

  const onChangeHandler = (val) => {
    if (length && val.length > length) {
      return;
    }
    onChange(val);
  };

  return (
    <div className={hide ? style.tInputFocused : style.tInput}>
      <div className={isFocused ? style.labelFocused : style.label}>
        {label}
        {hide
        && length && (
        <span className={style.labelRight}>
          {value?.length}
          /
          {length}
        </span>
        )}
      </div>
      <Input
        className={isFocused ? style.inputItemFocused : style.inputItem}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChangeHandler}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    </div>
  );
};

TInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TInput;
