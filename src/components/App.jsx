import Profile from "./Profile/Profile.js";
import user from '../data/user.json';
import Statistics from "./Statistics/Statistics.js";
import data from '../data/data.json';
import FriendList from "./Friends/FriendList.js";
import friends from '../data/friends.json';
import TransactionHistory from "./Transaction/TransactionHistory.js";
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};

