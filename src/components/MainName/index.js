import React from "react";
import {
  GreetingContainer,
  GreetingsP,
  FullNameH1,
  BioP,
  InnerContainer,
  NameH2,
} from "./MainNameElements";

const MainName = () => {
  return (
    <div>
      <GreetingContainer id="home">
        <InnerContainer>
          <GreetingsP>hello, my name is</GreetingsP>
          <FullNameH1>katelyn devine.</FullNameH1>
          <NameH2>I love software development.</NameH2>
          <BioP>
            I am a software engineer based in Minneapolis, MN. I am passionate
            about building things that live on the web that are both functional
            and aesthetically pleasing. I am currently working as a software
            engineering consultant for{" "}
            <a
              href="https://threebridge.com/solutions/crew/"
              target="_blank"
              rel="noopener noreferrer"
              className="bioLink"
            >
              Crew / ThreeBridge
            </a>
            , where my first project is working as a Front End Engineer for{" "}
            <a
              href="https://www.bestbuy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bioLink"
            >
              Best Buy.
            </a>
          </BioP>
          {/* <ContactBtn /> */}
        </InnerContainer>
      </GreetingContainer>
    </div>
  );
};

export default MainName;
