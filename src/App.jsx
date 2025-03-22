import Profile from "./components/Profile/Profile.jsx";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
