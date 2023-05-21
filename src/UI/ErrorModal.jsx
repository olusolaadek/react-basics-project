import React from "react";

import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card className={classes.modal}>
          <header className={classes.header}>{props.title}</header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
      {/* {props.showError && (
        <div className={classes.backdrop}>
          <div className={classes.modal}>
            <div className={classes.header}>
              {" "}
              <h2>Error </h2>
            </div>
            <div className={classes.content}>{props.errorMessage}</div>
          </div>
          <div className={classes.actions}>
            <button onClick={dismissHandler}>X</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ErrorModal;
