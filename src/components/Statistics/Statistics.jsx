import styles from "./Statistics.module.css";
import PropTypes from 'prop-types';
import StatisticsItem from "components/StatisticsItem/StatisticsItem";

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && (<h2 className={styles.title}>{title}</h2>)}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            id={id}
            label={label}
            percentage={percentage}
          />
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}
