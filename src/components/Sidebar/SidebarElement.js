import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #021c17;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-300%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #6affb7;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  curser: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: red;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 70px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.5s ease-in-out;
  color: #6affb7;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    transition: 0.4s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 10px;
  // background: red;
  white-space: nowrap;
  padding: 16px 64px;
  color: #6affb7;
  font-size: 16px;
  outline: none;
  border: 0.5px solid #6affb7;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;

  &:hover {
    border: 0.5px solid #6affb7;
    transition: all 0.5s ease-in-out;
    background: rgba(106, 225, 183, 0.1);
    color: #6affb7;
  }
`;
