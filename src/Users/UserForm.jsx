import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserForm.module.css";
function UserForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const [error, setError] = useState();
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length <= 0) {
      setError({
        title: "Please enter a username",
        message: "Username is required and must be at least 3 characters",
      });
      setShowError(true);
      return;
    }
    if (age <= 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      setShowError(true);
      return;
    }
    const data = { username: username, age: age, id: Math.random().toString() };
    props.onAddNewUser(data);
    console.log("handleSubmit", data);
    setUsername("");
    setAge(0);
    setError();
  };

  function userNameChangeHandler(event) {
    setUsername(event.target.value);
    // console.log(event.target.value);
  }
  function ageChangeHandler(event) {
    setAge(event.target.value);
    // console.log(event.target.value);
  }
  function handleError(event) {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          showError={showError}
          onConfirm={handleError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              minLength={3}
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
              min={0}
              onChange={ageChangeHandler}
            />
          </div>

          <Button type="submit" text="Add User">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
}
export default UserForm;
