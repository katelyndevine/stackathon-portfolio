//store stock compnents
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom"; //for link router
import { Link as LinkScroll } from "react-scroll"; //for link scroll

export const Nav = styled.nav`
  background: #042b24;
  height: 70px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1rem; //default is 16px
  position: sticky; // A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
  top: 0;
  z-index: 10; //specifies the stack order of an element.
  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 0;
  z-index: 1;
  width: 100%;
  padding: 0px 24px;
  max-width: 1100px;
`;

// eventually we'll use both react scroll and react router
export const NavLogo = styled(LinkR)`
  color: #fff;
  font-family: "Encode Sans Expanded", sans-serif;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%); //rotates and centers it
    font-size: 1.8rem;
    cursor: pointer;
    color: #eebf00;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px; // there is padding around that green button

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  font-family: "Titillium Web", sans-serif;
  font-weight: 100;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.6s ease-in-out;
    // background: blue;
    color: #6affb7;
  }

  // &.active {
  //   border-bottom: 3px solid yellow;
  // }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 10px;
  border: 0.5px solid #6affb7;
  white-space: nowrap;
  padding: 4px 15px;
  color: #6affb7;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #6affb7;
    color: #000000;
  }
`;
