import styled from "styled-components";

export const WorkContainer = styled.div`
  background: #042b24;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 75px;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 1;
  border-top: 2px dotted #6affb7;
  // border-top-style: dotted;
  // border-width: 800px;
`;

export const InnerWorkContainer = styled.div`
  display: grid;
  flex-direction: row;
  align-items: center;
  grid-gap: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
`;

export const WorkH1 = styled.h1`
  color: white;
  justify-content: left;
  font-size: 48px;
  text-align: left;
  font-family: "Encode Sans Expanded", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const WorkImg = styled.div`
  height: 275px;
  width: 275px;
  display: flex;
  flex-direction: row;
  // background-color: grey;
  border-radius: 4px;
  border: 1px solid white;
  align-items: center;

  transition: 0.3s;

  &:hover {
    transform: translate(0, -10px);
  }
`;
