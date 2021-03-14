import styled from "styled-components";

export const GreetingContainer = styled.div`
  background: #021c17;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0, 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const InnerContainer = styled.div`
  background: #021c17;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0, 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  // width: 1000px;
  padding: 100, 100;
`;

export const GreetingsP = styled.p`
  margin-top: 24px;
  color: #6affb7;
  font-size: 16px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const FullNameH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: left;
  font-family: "Encode Sans Expanded", sans-serif;
  padding: 10px 0px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const BioP = styled.p`
  margin: 10px 150px;
  color: white;
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
