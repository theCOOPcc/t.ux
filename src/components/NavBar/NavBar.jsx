import React from 'react';
import styled from 'styled-components';
import { Nav, NavItem } from '../../components/StyledComponents/NavComponents';

const RightTag = styled.div`
  line-height: 40px;
  padding-left: 20px;
  padding-right: 40px;
  position: absolute;
  right: 0;
`;
const A = styled.a`
  color: white;
`;

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <Nav>
          <NavItem>
            <A href=" " className="nav-link">
              Welcome, {user.name}
            </A>
          </NavItem>
          <NavItem>
            <A href="/activities/create " className="nav-link">
              Create Activity
            </A>
          </NavItem>
          <NavItem>
            <A href="/activities" className="nav-link">
              View Activities
            </A>
          </NavItem>
          <RightTag>
            <A href=" " className="nav-link" onClick={handleLogout}>
              Log Out
            </A>
          </RightTag>
        </Nav>
      ) : (
        <Nav>
          <RightTag>
            <A href="/login" className="nav-link">
              Log In
            </A>
            <A href="/signup" className="nav-link">
              Sign Up
            </A>
          </RightTag>
        </Nav>
      )}
    </>
  );
};

export default NavBar;
