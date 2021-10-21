import React, { useEffect } from "react";
import anime from "animejs";
import IconSVG from "./IconSVG";
import { LogoSVGContainer } from "./LogoAnimationElements";

const IconLoader = () => {
  const animate = () => {
    anime
      .timeline({ loop: false })
      .add({
        duration: 1000,
      })
      .add({
        targets: "#logo path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1750,
      })
      .add({
        targets: "#logo g #kd",
        delay: 500,
        opacity: [{ value: [0, 1], duration: 500, easing: "easeOutQuad" }],
        color: "#ff3d00",
      })
      .add({
        targets: ".loader",
        duration: 500,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <LogoSVGContainer>
      <div className="loader">
        <IconSVG />
      </div>
    </LogoSVGContainer>
  );
};

export default IconLoader;
