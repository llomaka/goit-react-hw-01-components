import format from "components/helpers/format";
import getRandomHexColor from "components/helpers/getRandomHexColor";
import styles from "./Statistics.module.css";

export default function Statistics(props) {
  const { title, stats } = props;
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

function StatisticsItem(props) {
  return (
    <li className={styles.item} key={props.id} style={{backgroundColor: getRandomHexColor(),}}>
      <span className={styles.label}>{props.label}</span>
      <span className={styles.percentage}>{format(props.percentage)}%</span>
    </li>
  )
}
