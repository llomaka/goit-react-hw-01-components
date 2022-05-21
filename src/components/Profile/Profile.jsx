import format from "components/helpers/format";
import styles from './Profile.module.css';

export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt={username + " avatar"}
          className={styles.avatar}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{"@" + tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{format(stats.followers)}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{format(stats.views)}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{format(stats.likes)}</span>
        </li>
      </ul>
    </div>
  )
}
