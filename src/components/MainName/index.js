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
            about building things that live on the web all the while adding some
            aethetic appeal too.
          </BioP>
          {/* <ContactBtn /> */}
        </InnerContainer>
      </GreetingContainer>
    </div>
  );
};

export default MainName;
