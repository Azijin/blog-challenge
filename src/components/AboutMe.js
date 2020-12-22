import React from "react";
import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";
const AboutMe = (props) => {
  return (
    <div className={props.className}>
      <ItemTitle className="itemTitle" title={props.title} />
      <ItemPicture
        className="itemPicture"
        source={props.source}
        alternative={props.alternative}
      />
      <ItemDescription className="itemDescription" text={props.text} />
    </div>
  );
};
export default AboutMe;
