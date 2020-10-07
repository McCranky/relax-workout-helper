import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./Navbar.styled";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Relax</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
