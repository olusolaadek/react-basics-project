import React from "react";

export default function UserItem(props) {
  const user = props.user;

  const deleteItemHandler = () => {
    console.log(user);
    props.onDeleteItem(user);
  };
  return (
    <li className="list-group-item">
      {" "}
      {user.username} ({user.age} years old)
      <button onClick={deleteItemHandler} className="btn text-danger float-end">
        X
      </button>
    </li>
  );
}
