import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  height: 50px;
  background: #48a600;
  z-index: 10;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 10px;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/details/1">ProjectDetails</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
