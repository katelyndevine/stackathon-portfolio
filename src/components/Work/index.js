import React from "react";
import Fade from "react-reveal/Fade";

import {
  WorkContainer,
  InnerWorkContainer,
  WorkH1,
  WorkImg,
} from "./WorkElements";

import { Separator } from "../About/AboutElements";

const Work = () => {
  return (
    <div>
      <Separator />
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
    </div>
  );
};

export default Work;
