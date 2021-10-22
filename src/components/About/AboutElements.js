import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #042b24;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
  // border-top: 2px dotted #6affb7;

  @media screen and (max-width: 600px) {
    padding: 50px;
    // go from 2col to 1col:
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media screen and (min-width: 600px) {
    padding: 50px;
  }

  @media screen and (min-width: 768px) {
    padding: 75px;
  }

  @media screen and (min-width: 992px) {
    padding: 125px;
  }

  @media screen and (min-width: 1200px) {
    // padding: 180px;
    padding: 15%;
  }
`;

// export const AboutInnerContainer = styled.div`
//   width: 800px;
//   position: relative;
//   z-index: 1;
//   border-top-style: 2px dotted 6affb7;
// `;

export const AboutTextDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 2;
  padding: 0, 30px;
  position: relative;
  z-index: 1;
  width: 100%;

  // @media screen and (max-width: 768px) {
  //   width: 100%;
  // }
`;

export const AboutP = styled.p`
  // margin: 10px 150px;
  color: white;
  font-size: 18px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const AboutH1 = styled.h1`
  color: white;
  justify-content: left;
  font-size: 48px;
  text-align: left;
  font-family: "Encode Sans Expanded", sans-serif;
  padding: 10px 0px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const AboutUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // align-items: flex-start;
  // align-content: flex-start;
  // list-style: none;
  // text-align: center;
  // flex-direction: column;
  justify-content: flex-start;
  list-style-type: square;
  padding: 10px;
  @media screen and (max-width: 768px) {
    // display: none;
  }
`;

export const AboutBul = styled.li`
  height: 30px;
  color: #6affb7;
  padding-right: 30px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const AboutImgDiv = styled.div`
  // width: 25%;

  // // &:hover {
  // //   background-image: url("../../images/headshot-color.jpg");
  // // }

  transition: 0.3s;

  &:hover {
    transform: translate(0, -10px);
  }

  @media screen and (max-width: 600px) {
    margin-top: -25px;
    margin-left: -10px;
    width: 75%;
  }
`;
