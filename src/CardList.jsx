import React from "react";
import UserItem from "./UserItem";

function CardList(props) {
  const users = props.users;

  const deleteItemHandler = (userData) => {
    props.onDeleteFromList(userData);

    console.log("Deleted user ", userData);
  };
  return (
    <div className="mt-4 bt-1">
      <ul className="list-group">
        {users &&
          users.map((user) => (
            <UserItem
              user={user}
              key={user.username}
              onDeleteItem={deleteItemHandler}
            />
          ))}
      </ul>

      {users.length === 0 && <p>No users!</p>}
    </div>
  );
}

export default CardList;
