import PropTypes from 'prop-types';
import { ProfileDiv, Description, Avatar, Name, Text, Stats, StatsList, SpanLabel, SpanQuantity } from './Profile.styles';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
      <ProfileDiv>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <StatsList>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{stats.followers}</SpanQuantity>
        </StatsList>
        <StatsList>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{stats.views}</SpanQuantity>
        </StatsList>
        <StatsList>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{stats.likes}</SpanQuantity>
        </StatsList>
      </Stats>
    </ProfileDiv>
//        <div class="profile">
//   <div class="description">
//     <img
//       src={avatar}
//             alt="User avatar"
//             width="144"
//       class="avatar"
//     />
//           <p class="name">{username }</p>
//           <p class="tag">{tag }</p>
//           <p class="location">{location }</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//             <span class="quantity">{stats.followers }</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//             <span class="quantity">{ stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//             <span class="quantity">{ stats.likes}</span>
//     </li>
//   </ul>
// </div>
   ) 
}

Profile.propTypes = {
   username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape(
        {
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired
    }).isRequired,
  // stats: PropTypes.number.isRequired,
  // stats: PropTypes.exact({
  //   followers: PropTypes.number.isRequired,
  //   views: PropTypes.number.isRequired,
  //   likes: PropTypes.number.isRequired,
  // }).isRequired,
};