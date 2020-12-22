import React from "react";

const Link = (props) => {
  return (
    <div className={props.className}>
      <a href={props.url}>{props.text}</a>
    </div>
  );
};

export default Link;
