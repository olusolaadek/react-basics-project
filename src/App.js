import { useState } from "react";
import "./App.css";
import UserForm from "./Users/UserForm";
import UserList from "./Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  function newUserHandler(user) {
    if (!users.some((d) => d.username === user.username)) {
      // setUsers([...users, user]);
      setUsers((prevUsers) => {
        return [...prevUsers, user];
      });

      console.log("App Component", user);
    } else {
      console.log("App Component: " + user.username + " is already added");
    }
  }

  function deleteFromListHandler(userData) {
    const index = users.findIndex((user) => {
      return user.username === userData.username;
    });
    console.log("Deleted Index", index);
    users.splice(index, 1);

    setUsers([...users]);
    console.log("Deleted data from list", userData);
  }
  return (
    <div>
      <UserForm onAddNewUser={newUserHandler} />

      <UserList users={users} onDeleteFromList={deleteFromListHandler} />
    </div>
  );
}

export default App;
