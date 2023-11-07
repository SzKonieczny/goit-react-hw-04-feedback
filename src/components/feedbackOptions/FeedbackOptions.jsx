import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsBtn = Object.keys(options);

  return (
    <ul className={css.btnList}>
      {optionsBtn.map(option => (
        <li key={option}>
          <button
            className={css[option]}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func,
};
