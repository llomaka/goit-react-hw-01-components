export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul className="friend-list">
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
    <li className="item" key={id}>
      {isOnline
        ? (<span className="status" style={{ backgroundColor: '#32CD32'}}></span>)
        : (<span className="status"></span>)}
      <img className="avatar" src={avatar} alt={name + " avatar"} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}
