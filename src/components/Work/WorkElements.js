import styled from "styled-components";

export const WorkContainer = styled.div`
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

export const InnerWorkContainer = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
  flex-direction: row;
`;

export const WorkImg = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: row;
  // background-color: grey;
  border-radius: 4px;
  border: 1px solid white;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 125px;
    width: 125px;
  }
`;
