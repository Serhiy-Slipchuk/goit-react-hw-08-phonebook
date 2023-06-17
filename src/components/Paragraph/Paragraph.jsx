import css from './Paragraph.module.scss';
import PropTypes from 'prop-types';

const Paragraph = function ({ text }) {
  return <p className={css.text}>{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
