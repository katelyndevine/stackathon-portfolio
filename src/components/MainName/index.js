import React from "react";
import {
  GreetingContainer,
  GreetingsP,
  FullNameH1,
  BioP,
  InnerContainer,
} from "./MainNameElements";

const MainName = () => {
  return (
    <div>
      <GreetingContainer>
        <InnerContainer>
          <GreetingsP>hello, my name is</GreetingsP>
          <FullNameH1>katelyn devine</FullNameH1>
          <BioP>
            I am a software engineer based in Minneapolis, MN.
            <br />I am passionate about building things that live on the web all{" "}
            <br />
            the while adding some aethetic appeal too.
          </BioP>
          {/* <ContactBtn /> */}
        </InnerContainer>
      </GreetingContainer>
    </div>
  );
};

export default MainName;
