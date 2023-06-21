import css from './ErrorMessage.module.scss';
import PropTypes from 'prop-types'

const ErrorMessage = function ({ message }) {
  return (
    <div className={css['error-thumb']}>
      <p className={css['error-message']}>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage;
