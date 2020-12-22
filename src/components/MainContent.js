import React from "react";
import Item from "./Item";

const MainContent = (props) => {
  return (
    <section className={props.className}>
      <Item
        title="Did Karl Hungus really fixed the cable ?"
        subtitle="The way of the Nihilist"
        alternative="a cable reparator"
        source="https://preview.redd.it/fdzn86qtqg121.png?width=960&crop=smart&auto=webp&s=5fee74df4aaef696d50f9ccac9bde2fc2826973a"
        text="In the movie, directed by an outstanding screenwriter Jackie Treehorn, Karl Hungus aka Uli Kunkel is called to repair the cable at Bunny LaJoya's place aka Bunny Lebowski. But when Karl arrived on site, we see that he has brought his tools, however his way of typing on the television by saying that he is an expert, which may leave us perplexed as to his ability to be able to really fixe the cable."
      />
      <Item
        title="A world of pain for Smokey"
        subtitle="In a league game you cannot cross over the line"
        source="https://www.newsobserver.com/entertainment/movies-news-reviews/7y2h9a/picture203753019/alternates/LANDSCAPE_1140/Smokey%202a"
        alternative="bowling games"
        text="There is nothing more noble than bowling. In a league game, there are certain rules to follow such as not going over the line. However, according to Walter, Smokey would indeed have crossed the line when launching his ball. Walter rationally explaining that there are rules to be respected unlike Vietnam. However Smokey continues to deny it and Walter tells him that he is entering a world of pain. Faced with this confrontation, Smokey continues to affirm that he did not bite, and therefore ends up in a world of pain where he has to register 0 by himself on the score sheet while Walter threatens him with a pistol. Even that it is highly possible that Walter was wrong."
      />
    </section>
  );
};
export default MainContent;
