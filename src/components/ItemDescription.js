import React from "react";

const ItemDescription = (props) => {
  return <p className={props.className}> {props.text} </p>;
};

export default ItemDescription;
