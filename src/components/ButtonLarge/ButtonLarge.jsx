import css from './ButtonLarge.module.scss';
import PropTypes from 'prop-types';

const ButtonLarge = function ({ type, text, handler, children }) {
  return (
    <button className={css.button} type={type} onClick={handler}>
      {children}
      {text}
    </button>
  );
};

ButtonLarge.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  text: PropTypes.string.isRequired,
  handler: PropTypes.func,
};

export default ButtonLarge;
