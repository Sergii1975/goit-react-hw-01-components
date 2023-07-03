import PropTypes from 'prop-types';
import { FriendList, FriendAvatar, FriendName, FriendStatus } from './FriendList.styles'

export default function FriendListItem ({ avatar, name, isOnline }) {
  return (
    <FriendList>
      <FriendStatus statusType={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendList>
//     <li class="item">
//           <span class="status">{isOnline }</span>
//   <img class="avatar" src={avatar} alt="User avatar" width="48" />
//   <p class="name">{name}</p>
// </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
