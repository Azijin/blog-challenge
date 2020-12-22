import React from "react";
import ReactLogo from "../logo.svg";
import LeReacteur from "../img/logo-le-reacteur-2.png";
const Footer = (props) => {
  return (
    <footer className={props.className}>
      <p>
        Made with
        <img src={ReactLogo} alt="React logo" />
        <strong>React</strong>
        <img src={ReactLogo} alt="React logo" />
        at{" "}
        <a href="https://www.lereacteur.io/">
          <img src={LeReacteur} alt="Le Reacteur bootcamp logo" />
        </a>
        By <strong>Arthur Chen</strong>
      </p>
      <div>
        <a href="https://www.linkedin.com/in/arthur-chen-283857186/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Azijin">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
