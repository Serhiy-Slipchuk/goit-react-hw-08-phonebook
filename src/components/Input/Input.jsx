import css from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = function ({ label, type, name, value, handler, pattern, title, required }) {
  return (
    <label className={css.label}>
      {label}
      <input
        className={css.input}
        type={type}
        name={name}
        value={value}
        onChange={handler}
        pattern={pattern}
        title={title}
        required={required}
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'tel', 'email', 'password']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool.isRequired,

};

export default Input;
