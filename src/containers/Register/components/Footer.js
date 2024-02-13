import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';
import style from '../index.module.scss';

const Footer = ({
  onClickNextStep,
  disabled,
  label,
}) => (
  <div className={style.footer}>
    <Button shape="rounded" color="primary" className={disabled ? style.footerButtonDisabled : style.footerButton} onClick={onClickNextStep}>{label}</Button>
  </div>
);

Footer.propTypes = {
  onClickNextStep: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default Footer;
