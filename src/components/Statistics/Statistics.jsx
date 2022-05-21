import format from "components/helpers/format";
import getRandomHexColor from "components/helpers/getRandomHexColor";
import styles from "./Statistics.module.css";
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && (<h2 className={styles.title}>{title}</h2>)}
      <ul className={styles.statList}>
        {stats.map(item => (
          StatisticsItem(item)
        ))}
      </ul>
    </section>
  )
}

function StatisticsItem({ id, label, percentage }) {
  return (
    <li className={styles.item} key={id} style={{backgroundColor: getRandomHexColor()}}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{format(percentage)}%</span>
    </li>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}

StatisticsItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}
