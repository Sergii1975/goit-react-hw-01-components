import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'
import { FriendItems } from './FriendList.styles'

export default function FriendList({friends}) {
  return (
       <FriendItems>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendItems>
//     <ul class="friend-list">
//     {friends.map(({ id, avatar, name, isOnline }) => (
//         <FriendListItem
//           key={id}
//           avatar={avatar}
//           name={name}
//           isOnline={isOnline}
//         />
//       ))}
// </ul>
)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};