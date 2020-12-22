import React from "react";
import AboutMe from "./AboutMe";
const SideContent = (props) => {
  return (
    <section className={props.className}>
      <AboutMe
        className="AboutMe"
        title="About me"
        source="https://vignette.wikia.nocookie.net/thebiglebowski/images/7/7e/The_Dude.jpeg/revision/latest?cb=20111216183045"
        alternative="picture of me man black hair smiley face"
        text="I’m the Dude, so that’s what you call me. I'm an expert in the art of White Russian, bowling and meditation on Persian rug."
      />
    </section>
  );
};
export default SideContent;
