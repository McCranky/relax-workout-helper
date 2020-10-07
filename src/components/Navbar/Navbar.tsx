import React from "react";
import { FaBars } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./Navbar.styled";

interface Props {
  onMobileMenu: () => void;
}

const Navbar = ({ onMobileMenu, ...props }: Props) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            Relax {"    "}
            <GiMuscleUp />
          </NavLogo>
          <MobileIcon onClick={onMobileMenu}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/programs">Programs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signUp">Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signIn">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
