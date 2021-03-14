import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            about
          </SidebarLink>
          <SidebarLink to="work" onClick={toggle}>
            work
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            contact
          </SidebarLink>
          {/* <SidebarLink to="resume">resume</SidebarLink> */}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/resume">resume</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
