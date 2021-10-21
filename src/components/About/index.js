import React from "react";
import HoverImage from "react-hover-image";
import Fade from "react-reveal/Fade";
import {
  AboutContainer,
  AboutTextDiv,
  AboutP,
  AboutH1,
  AboutUl,
  AboutBul,
  AboutImgDiv,
} from "./AboutElements";

import headshot from "../../images/headshot-bw.jpg";
import colorHeadshot from "../../images/headshot-color.jpg";

const About = () => {
  // const [hasMounted, setIsMounted] = useState(false);

  // // const toggle = () => {
  // //   setIsOpen(!isOpen);
  // // };
  // useEffect(() => {
  //   setIsMounted(!hasMounted);
  // });
  // const [image, setImage] = useState(headshot);
  // const [hover, setHover] = useState(false);

  return (
    <AboutContainer id="about">
      <Fade effect="fadeInUp" delay={500}>
        <AboutTextDiv>
          <AboutH1>about me</AboutH1>
          <AboutP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </AboutP>
          <AboutUl>
            <AboutBul>JavaScript(ES6+)</AboutBul>
            <AboutBul>React</AboutBul>
            <AboutBul>Node.js</AboutBul>
            <AboutBul>Sequelize </AboutBul>
            <AboutBul>Express </AboutBul>
            <AboutBul>HTML + CSS </AboutBul>
          </AboutUl>
        </AboutTextDiv>
        <AboutImgDiv>
          <HoverImage
            src={headshot}
            hoverSrc={colorHeadshot}
            width={"250px"}
            className="headshot2"
          />
        </AboutImgDiv>
      </Fade>
    </AboutContainer>
  );
};

export default About;
