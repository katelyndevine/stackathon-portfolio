import React, { useEffect } from "react";
import anime from "animejs";
import IconSVG from "./IconSVG";
import { LogoSVGContainer } from "./LogoAnimationElements";

const IconLoader = () => {
  const animate = () => {
    anime
      .timeline({ loop: false })
      .add({
        duration: 2000,
      })
      .add({
        targets: "#logo path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1750,
        // delay: function (el, i) {
        //   return i * 250;
        // },
        // direction: "alternate",
      })
      .add({
        targets: "#logo g #kd",
        delay: 3750,
        duration: 700,
        easing: "easeInOutSine",
        // opacity: 0.5,
        // fill: "white",
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
