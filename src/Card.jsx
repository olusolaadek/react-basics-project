import React, { useState } from "react";

function Card(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username: username, age: age };
    props.onAddNewUser(data);
    console.log("handleSubmit", data);
  };

  function userNameChangeHandler(event) {
    setUsername(event.target.value);
    // console.log(event.target.value);
  }
  function ageChangeHandler(event) {
    setAge(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <div style={{ maxWidth: "540px" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={userNameChangeHandler}
          />
          <div id="userNameHelp" className="form-text">
            We'll never share your data with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={ageChangeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
}
export default Card;
