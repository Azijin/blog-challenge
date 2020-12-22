import React from "react";
import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";
const Item = (props) => {
  return (
    <article>
      <ItemTitle className="itemTitle" title={props.title} />
      <ItemSubtitle className="itemSubtitle" subtitle={props.subtitle} />
      <ItemPicture
        className="itemPicture"
        source={props.source}
        alternative={props.alternative}
      />
      <ItemDescription className="itemDescription" text={props.text} />
    </article>
  );
};

export default Item;
