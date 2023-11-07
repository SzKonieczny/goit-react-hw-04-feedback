import PropTypes from 'prop-types';
import css from './statistics.module.css';
export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.subtitle}>Statistics:</h2>

      <div className={css.box}>
        <p className={css.item}>Good: {good}</p>
        <p className={css.item}>Neutral: {neutral}</p>
        <p className={css.item}>Bad: {bad}</p>
      </div>
      <p className={css.total}>Total: {total}</p>
      <p className={css.perсent}>Positive feedback: {positive}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
