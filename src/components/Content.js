import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
const Content = (props) => {
  return (
    <main className={props.className}>
      <MainContent className="mainContent" />
      <SideContent className="sideContent" />
    </main>
  );
};
export default Content;
