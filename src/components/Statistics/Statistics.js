import format from "components/helpers/format";
import getRandomHexColor from "components/helpers/getRandomHexColor";

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className="statistics">
      {title && (<h2 className="title">{title}</h2>)}
      <ul className="stat-list">
        {stats.map(item => (
          StatisticsItem(item)
        ))}
      </ul>
    </section>
  )
}

function StatisticsItem(props) {
  return (
    <li className="item" key={props.id} style={{backgroundColor: getRandomHexColor(),}}>
      <span className="label">{props.label}</span>
      <span className="percentage">{format(props.percentage)}%</span>
    </li>
  )
}
