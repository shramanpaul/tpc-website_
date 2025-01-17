import React from "react";
import Cards from "./Cards";

interface About {
  title: string;
  content1: string;
  content2: string;
}

const about: About = {
  title: "About",
  content1: `
    Bitbyte-TPC is a peer-learning community filled with tech-enthusiasts just like YOU!
    We intend to keep your interest kindled with regular thought-provoking sessions
    on Competitive coding , web, app, and game development, open source
    contributions, AI and ML (basically anything and everything that involves
    coding). aim to help students and as a community we want to grow as much as
    possible in many domains of coding and development, be it Competitive
    Programming, Android, Web, Open Source, AI/ML, Ethical Hacking.
    `,
  content2:
    "You also get a chance to exhibit your skills and win prizes in events like Jamboree, NewBie, Commix and many more organised every now and then.",
};


function About() {
  return (
    <div className="flex flex-col items-center ">
      <div className="text-transparent bg-clip-text bg-gradient-linear text-4xl md:text-6xl font-mono">
        {about.title}
      </div>
      <div className="flex justify-center flex-wrap md:space-x-4 py-5">
        <Cards text={"Design"} img_src={"/pencil.svg"} />
        <Cards text={"Develop"} img_src={"/brackets.svg"}/>
        <Cards text={"Test"} img_src={"/graph.svg"}/>
        <Cards text={"Deploy"} img_src={"/rocket.svg"}/>
      </div>
      <div className="py-2 text-lg md:text-xl text-center">{about.content1}</div>
      <div className="py-2 text-lg md:text-xl text-center">{about.content2}</div>
    </div>
  );
}

function SecondComponent() {
  return (
    <div className="flex flex-row md:flex-row p-4 my-7">
      <div className="  mx-3 ">
        <About />
      </div>
    </div>
  );
}

export default SecondComponent;
