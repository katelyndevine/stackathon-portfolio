import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #021c17;
  display: flex;
  justify-content: center;
  // flex-direction: column;
  align-items: center;
  padding: 0, 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  border-top: 2px dotted #6affb7;
  // border-top-style: dotted;
  // border-width: 800px;
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
  padding: 0, 30px;
  position: relative;
  z-index: 1;
  width: 700px;
  margin: 50px;
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
    font-size: 10px;
  }
`;

export const AboutH1 = styled.h1`
  color: white;
  justify-content: left;
  font-size: 48px;
  text-align: left;
  font-family: "Encode Sans Expanded", sans-serif;
  padding: 10px 0px;
  animation-name: fadeIn;
  animation-duration: 3s;
  // opacity: ${({ isOpen }) => (isOpen ? "100%" : "")};
  // top: ${({ isOpen }) => (isOpen ? "0" : "-300%")};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    } // CSS properties at start
    100% {
      opacity: 1;
    }
  }

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
  justify-content: space-between;
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
`;

export const AboutImgDiv = styled.img`
  height: 250px;
  width: 200px;
  border: 0.05px dotted white;
  border-radius: 7px;
  margin: 50px;
  object-fit: cover;
`;
