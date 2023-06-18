import css from './ButtonLarge.module.scss';
import PropTypes from 'prop-types';

const ButtonLarge = function ({ type, text, children }) {
  return (
    <button className={css.button} type={type}>
      {children}
      {text}
    </button>
  );
};

ButtonLarge.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLarge;
