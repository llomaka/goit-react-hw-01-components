import format from "helpers/format";
import getRandomHexColor from "helpers/getRandomHexColor";
import styles from "./StatisticsItem.module.css";
import PropTypes from "prop-types";

export default function StatisticsItem({ id, label, percentage }) {
  return (
    <li className={styles.item} key={id} style={{backgroundColor: getRandomHexColor()}}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{format(percentage)}%</span>
    </li>
  )
}

StatisticsItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}
