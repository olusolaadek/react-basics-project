import React from "react";

const Card = (props) => {
  return (
    <div className={props.className}>
      <div style={{ maxWidth: "540px" }}>{props.children}</div>
    </div>
  );
};

export default Card;
