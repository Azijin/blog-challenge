import React from "react";
import Title from "./Title";
import Baseline from "./Baseline";

const Header = (props) => {
  return (
    <header className={props.className}>
      <Title className="blog-title" text="My Blog" />
      <Baseline className="baseline" text="Sometimes there's a man..." />
    </header>
  );
};

export default Header;
