import React from "react";
import {
  AboutContainer,
  AboutTextDiv,
  AboutP,
  AboutH1,
  AboutUl,
  AboutBul,
  AboutImgDiv,
} from "./AboutElements";

import headshot from "../../images/headshot.png";

const About = () => {
  // const [hasMounted, setIsMounted] = useState(false);

  // // const toggle = () => {
  // //   setIsOpen(!isOpen);
  // // };
  // useEffect(() => {
  //   setIsMounted(!hasMounted);
  // });
  return (
    <AboutContainer id="about">
      <AboutTextDiv>
        <AboutH1>about me</AboutH1>
        <AboutP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
      <AboutImgDiv src={headshot} alt="headshot" />
    </AboutContainer>
  );
};

export default About;
