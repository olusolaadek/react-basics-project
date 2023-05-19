import { useState } from "react";
import "./App.css";
import Card from "./Card";
import CardList from "./CardList";

function App() {
  const [users, setUsers] = useState([]);

  function newUserHandler(user) {
    setUsers([user, ...users]);

    console.log("App Component", user);
  }

  function deleteFromListHandler(userData) {
    console.log("Deleted data from list", userData);
  }
  return (
    <div className="container">
      <Card onAddNewUser={newUserHandler} />
      {console.log(Array.isArray(users))}

      <CardList users={users} onDeleteFromList={deleteFromListHandler} />
    </div>
  );
}

export default App;
