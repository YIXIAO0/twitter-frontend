import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';
import style from '../index.module.scss';

const Footer = ({
  onClickNextStep,
  disabled,
}) => (
  <div className={style.footer}>
    <Button shape="rounded" color="primary" className={disabled ? style.footerButtonDisabled : style.footerButton} onClick={onClickNextStep}>Next</Button>
  </div>
);

Footer.propTypes = {
  onClickNextStep: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Footer;
