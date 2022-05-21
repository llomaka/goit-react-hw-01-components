import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        FriendListItem(item)
      ))}
    </ul>
  )
}

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={styles.item}>
      {isOnline
        ? (<span className={styles.status} style={{ backgroundColor: '#32CD32'}}></span>)
        : (<span className={styles.status}></span>)}
      <img className={styles.avatar} src={avatar} alt={name + " avatar"} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array,
  item: PropTypes.object,
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
}
