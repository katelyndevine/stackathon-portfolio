import styled from "styled-components";

export const GreetingContainer = styled.div`
  background: #021c17;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  // padding: 0, 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 600px) {
    padding: 60px;
  }

  @media screen and (min-width: 600px) {
    padding: 110px;
  }

  @media screen and (min-width: 768px) {
    padding: 130px;
  }

  @media screen and (min-width: 992px) {
    padding: 25%;
  }

  @media screen and (min-width: 1175px) {
    // padding: 180px;
    padding: 25%;
  }

  @media screen and (min-width: 1200px) {
    // padding: 180px;
    padding: 25%;
  }
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

  // @keyframes slide {
  //   0% {
  //     margin-top: -300px;
  //   }
  //   5% {
  //     margin-top: -200px;
  //   }
  //   33% {
  //     margin-top: -200px;
  //   }
  //   38% {
  //     margin-top: -100px;
  //   }
  //   66% {
  //     margin-top: -100px;
  //   }
  //   71% {
  //     margin-top: 0px;
  //   }
  //   100% {
  //     margin-top: 0px;
  //   }
  // }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const FullNameH1 = styled.h1`
  color: white;
  text-align: center;
  font-family: "Encode Sans Expanded", sans-serif;
  padding: 10px 0px;
  // animation: slide 1s linear;

  // @keyframes slide {
  //   0% {
  //     margin-top: -300px;
  //   }
  //   100% {
  //     margin-top: 0px;
  //   }
  // }

  @media screen and (max-width: 500px) {
    font-size: 32px;
  }

  @media screen and (min-width: 501px) {
    font-size: 45px;
  }

  @media screen and (min-width: 650px) {
    font-size: 70px;
  }
`;

export const BioP = styled.p`
  // margin: 10px 150px;
  color: white;
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
