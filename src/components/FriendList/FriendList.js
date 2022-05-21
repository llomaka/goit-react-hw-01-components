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
      <IsOnlineElement
        isOnline={isOnline}
      />
      <img className="avatar" src={avatar} alt={name + " avatar"} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

function IsOnlineElement(props) {
  const { isOnline } = props;
  if (isOnline) return (<span className="status" style={{ backgroundColor: '#32CD32', }}></span>);
  else return (<span className="status"></span>);
}
