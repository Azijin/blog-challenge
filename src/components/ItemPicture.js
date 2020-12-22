import React from "react";

const ItemPicture = (props) => {
  return (
    <img
      className={props.className}
      src={props.source}
      alternative={props.alternative}
    ></img>
  );
};
export default ItemPicture;
