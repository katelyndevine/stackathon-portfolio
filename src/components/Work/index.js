import React from "react";
import {
  WorkContainer,
  InnerWorkContainer,
  WorkH1,
  WorkImg,
} from "./WorkElements";

const Work = () => {
  return (
    <WorkContainer id="work">
      <WorkH1>work</WorkH1>
      <InnerWorkContainer>
        <WorkImg />
        <WorkImg />
        <WorkImg />
      </InnerWorkContainer>
    </WorkContainer>
  );
};

export default Work;
