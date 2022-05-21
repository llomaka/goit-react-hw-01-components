import styles from './FriendList.module.css';

export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        <FriendListItem
          friend={item} />
      ))}
    </ul>
  )
}

function FriendListItem(props) {
  const { avatar, name, isOnline, id } = props.friend;
  return (
    <li className={styles.item} key={id}>
      {isOnline
        ? (<span className={styles.status} style={{ backgroundColor: '#32CD32'}}></span>)
        : (<span className={styles.status}></span>)}
      <img className={styles.avatar} src={avatar} alt={name + " avatar"} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}
