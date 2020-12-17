import React from 'react';
// import styled from 'styled-components';
import * as N from '../TuxComponents/NavComponents';
import * as U from '../TuxComponents/UniversalComponents';
import ProgressBar from '../ProgressBar/ProgressBar';

 
const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <N.Nav>
          <N.NavLink href=" ">
            Welcome, {user.name}
          </N.NavLink>
          <N.NavLink href="/activities/create ">
            Create Activity
          </N.NavLink>
          <N.NavLink href="/activities">
            View Activities
          </N.NavLink>
          <N.NavLink href=" " onClick={handleLogout}>
            Log Out
          </N.NavLink>
        </N.Nav>
      ) : (
        <N.Nav>
          <U.ColorBlock tuxBlue></U.ColorBlock>
          <U.ColorBlock tuxYellow></U.ColorBlock>
          <U.ColorBlock tuxWhite></U.ColorBlock>
          <U.ColorBlock tuxGrey></U.ColorBlock>
          <U.ColorBlock tuxBlack></U.ColorBlock>
          <U.ColorBlock tuxRed></U.ColorBlock>

          {/* <ProgressBar/> */}

          <N.NavLink floatRight href="/login">
            Log In
          </N.NavLink>
          <N.NavLink href="/signup">
            Sign Up
          </N.NavLink>
        </N.Nav>
      )}
    </>
  );
};

export default NavBar;

// ught