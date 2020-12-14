import React from 'react';
// import styled from 'styled-components';
import * as S from '../StyledComponents/NavComponents';
 
const NavBar = ({ user, handleLogout, floatRight }) => {
  return (
    <>
      {user ? (
        <S.Nav>
          <S.NavLink href=" ">
            Welcome, {user.name}
          </S.NavLink>
          <S.NavLink href="/activities/create ">
            Create Activity
          </S.NavLink>
          <S.NavLink href="/activities">
            View Activities
          </S.NavLink>
          <S.NavLink href=" " onClick={handleLogout}>
            Log Out
          </S.NavLink>
        </S.Nav>
      ) : (
        <S.Nav>
          <S.NavLink floatRight href="/login">
            Log In
          </S.NavLink>
          <S.NavLink href="/signup">
            Sign Up
          </S.NavLink>
        </S.Nav>
      )}
    </>
  );
};

export default NavBar;

// ught