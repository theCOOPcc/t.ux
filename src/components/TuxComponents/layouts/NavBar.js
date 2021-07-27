import React from "react";
import styled, { css } from "styled-components";
import {
  nav_border,
  Flex,
  tux_blue,
  tux_yellow,
  tux_red,
  tux_grey,
  tux_white,
  tux_black,
} from "../utilities";

const Header = styled.header`
  max-width: 1440px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 5px 1fr;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 100px;
`;

const Nav = styled.nav`
  max-width: 1440px;
  grid-column: 1 / span all;
  ${Flex({ ai: "center" })};
  padding: 0 40px;
  border-bottom: ${nav_border};
`;

const NavLink = styled.a`
  color: ${tux_grey};
  font: var(--pop-semi-bold);
  text-decoration: none;
  padding: 15px;

  ${(props) =>
    props.right &&
    css`
      margin-left: auto;
    `}
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ColorBlock = styled.div`
  height: 5px;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  background-color: ${tux_blue};

  ${(props) =>
    props.yellow &&
    css`
      grid-column: 2 / span 1;
      background-color: ${tux_yellow};
    `}
  ${(props) =>
    props.white &&
    css`
      grid-column: 3 / span 1;
      background-color: ${tux_white};
    `}
  ${(props) =>
    props.grey &&
    css`
      grid-column: 4 / span 1;
      background-color: ${tux_grey};
    `}
  ${(props) =>
    props.black &&
    css`
      grid-column: 5 / span 1;
      background-color: ${tux_black};
    `}
  ${(props) =>
    props.red &&
    css`
      grid-column: 6 / span 1;
      background-color: ${tux_red};
    `}
`;

const NavBar = ({ user, handleLogout }) => {
  return (
    <Header>
      <ColorBlock></ColorBlock>
      <ColorBlock yellow></ColorBlock>
      <ColorBlock white></ColorBlock>
      <ColorBlock grey></ColorBlock>
      <ColorBlock black></ColorBlock>
      <ColorBlock red></ColorBlock>

      <Nav>
        <NavLink href="/">
          <Logo src="/images/logo.png" alt="tux logo" />
        </NavLink>

        {/* Not Logged In */}
        {!user ? (
          <>
            <NavLink right href="/login">
              Log In
            </NavLink>
            {/* <NavLink href="/signup">Sign Up</NavLink> */}
          </>
        ) : (
          user && (
            <>
              <NavLink right>{user.firstName}</NavLink>
              <Avatar src={user.avatar} alt="User Profile" />
              <NavLink href="/" onClick={handleLogout}>
                Log Out
              </NavLink>
            </>
          )
        )}
      </Nav>
    </Header>
  );
};

export default NavBar;
