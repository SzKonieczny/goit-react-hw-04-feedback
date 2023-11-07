import PropTypes from 'prop-types';
import css from './notification.module.css';

export const Notification = ({ message }) => (
  <h2 className={css.notification}>{message}</h2>
);

Notification.propTypes = {
  message: PropTypes.string,
};
