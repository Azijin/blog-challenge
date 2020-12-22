import React from "react";
import Link from "./Link";
const Nav = (props) => {
  return (
    <nav className={props.className}>
      <Link className="option" url={props.url} text="White Russian" />
      <Link className="option" url={props.url} text="Bowling" />
      <Link className="option" url={props.url} text="Persian Rug" />
      <Link className="option" url={props.url} text="Dude Abides" />
    </nav>
  );
};

export default Nav;
