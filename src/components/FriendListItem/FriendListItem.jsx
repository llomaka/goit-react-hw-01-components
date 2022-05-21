import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      {isOnline
        ? (<span className={styles.status} style={{ backgroundColor: '#32CD32'}}></span>)
        : (<span className={styles.status}></span>)}
      <img className={styles.avatar} src={avatar} alt={name + " avatar"} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
