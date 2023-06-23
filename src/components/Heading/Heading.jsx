import css from './Heading.module.scss';
import PropTypes from 'prop-types';

const Heading = function ({ tag, text }) {
  const Tag = tag || 'h1';

  return <Tag className={css.title}>{text}</Tag>;
};

Heading.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Heading;
