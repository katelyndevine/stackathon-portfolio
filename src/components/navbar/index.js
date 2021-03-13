import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./navbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">katelyn</NavLogo>
          <MobileIcon>
            {/* not a compnent, it's a react icon: */}
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work">work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
