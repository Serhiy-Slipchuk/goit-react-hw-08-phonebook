import css from './ButtonSmall.module.scss';
import PropTypes from 'prop-types';

const ButtonSmall = function ({ type, text, id, handler }) {
  return (
    <button className={css.button} type={type} id={id} onClick={handler}>
      {text}
    </button>
  );
};

ButtonSmall.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default ButtonSmall;
