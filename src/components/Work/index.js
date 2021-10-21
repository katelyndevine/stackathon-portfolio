import React from "react";
import Fade from "react-reveal/Fade";

import {
  WorkContainer,
  InnerWorkContainer,
  WorkH1,
  WorkImg,
} from "./WorkElements";

const Work = () => {
  return (
    <WorkContainer id="work">
      <Fade delay={200}>
        <WorkH1>work</WorkH1>
      </Fade>
      <InnerWorkContainer>
        <Fade delay={200}>
          <WorkImg />{" "}
        </Fade>
        <Fade delay={200}>
          <WorkImg />{" "}
        </Fade>{" "}
        <Fade delay={200}>
          <WorkImg />{" "}
        </Fade>
      </InnerWorkContainer>
    </WorkContainer>
  );
};

export default Work;
