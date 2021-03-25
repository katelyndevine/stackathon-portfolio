import React from "react";

import { LogoContainer, InnerContainer } from "./LogoAnimationElements";
import IconLoader from "./IconLoader";

const LogoAnimation = () => {
  return (
    <div>
      <LogoContainer id="home">
        <InnerContainer>
          <IconLoader />
        </InnerContainer>
      </LogoContainer>
    </div>
  );
};

export default LogoAnimation;
