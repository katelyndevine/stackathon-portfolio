import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            k/d
          </NavLogo>
          <MobileIcon onClick={toggle}>
            {/* not a compnent, it's a react icon: */}
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                // spy={true}
                // exact="true"
                // offset={-80}
              >
                about
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="work"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                work
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/resume">resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
