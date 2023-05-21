import React from "react";
import UserItem from "./UserItem";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

function UserList(props) {
  const users = props.users;

  const deleteItemHandler = (userData) => {
    props.onDeleteFromList(userData);

    console.log("Deleted user ", userData);
  };
  return (
    <Card className={classes.users}>
      <ul className="list-group">
        {users &&
          users.map((user) => (
            <UserItem
              user={user}
              key={user.id}
              onDeleteItem={deleteItemHandler}
            />
          ))}
      </ul>

      {users.length === 0 && <p>No users!</p>}
    </Card>
  );
}

export default UserList;
